import dotenv from "dotenv";
import { Request, Response} from "express";
import { generateRandomString } from "../utils/stringGen";
import querystring from "querystring";
import axios from "axios";

dotenv.config()

const clientId = process.env.SPOTIFY_CLIENT_ID;
const redirectUri = process.env.SPOTIFY_REDIRECT_URI;
const clientSecret = process.env.SPOTIFY_CLIENT_SECRET;

const validStates: string[] = [];

export const handleLogin = (req: Request, res: Response) => {
  const userState = generateRandomString(16);
  const scope = 'user-read-private user-read-email';

  validStates.push(userState);

  res.redirect('https://accounts.spotify.com/authorize?' +
    querystring.stringify({
      response_type: 'code',
      client_id: clientId,
      scope,
      redirect_uri: redirectUri,
      state: userState
    }));
};

export const completeAuth = async (req: Request, res: Response) => {
  const code = req.query.code || null;
  const state = req.query.state as string || null;

  if (state === null || !validStates.includes(state)) {
    res.redirect('/#' +
      querystring.stringify({
        error: 'state_mismatch'
      }));
  } else {
    const index = validStates.indexOf(state);
    if (index !== -1) {
      validStates.splice(index, 1);
    }
    const authOptions = {
      url: 'https://accounts.spotify.com/api/token',
      form: {
        code,
        redirect_uri: redirectUri,
        grant_type: 'authorization_code'
      },
      headers: {
        'Authorization': 'Basic ' + (Buffer.from(clientId + ':' + clientSecret).toString('base64'))
      },
      json: true
    };
    try {
      const response = await axios.post<any>(authOptions.url, querystring.stringify(authOptions.form as Record<string, string>), {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          'Authorization': authOptions.headers.Authorization
        }
      });

      const responseData = response.data;

      const accessToken = responseData.access_token;
      const refreshToken = responseData.refresh_token;

      const options = {
        url: 'https://api.spotify.com/v1/me',
        headers: { 'Authorization': 'Bearer ' + accessToken },
        json: true
      };

      const profileResponse = await axios.get<any>(options.url, {
        headers: options.headers
      });

      const profileData = profileResponse.data;

      res.redirect(`http://localhost:8080/me/home?access_token=${accessToken}`);

    } catch (error) {
      res.redirect('/#' +
        querystring.stringify({
          error: 'invalid_token'
        }));
    }
  }
}

export const tokenRefresh = async (req: Request, res: Response) => {
  const refreshToken = req.query.refresh_token;
  const authOptions = {
    url: 'https://accounts.spotify.com/api/token',
    headers: { 'Authorization': 'Basic ' + (Buffer.from(clientId + ':' + clientSecret).toString('base64')) },
    form: {
      grant_type: 'refresh_token',
      refresh_token: refreshToken
    },
    json: true
  };
  axios.post<any>(authOptions.url, querystring.stringify(authOptions.form as Record<string, string>), {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': authOptions.headers.Authorization
    }
  })
    .then((response) => {
      const responseData = response.data;
      const access_token = responseData.access_token;
      res.send({
        'access_token': access_token
      });
    })
    .catch((error) => {
      res.status(500).send(`failed to refresh token: ${JSON.stringify(error.response.data)}`);
    });
}