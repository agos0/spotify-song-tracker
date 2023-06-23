import dotenv from "dotenv";
import { Request, Response} from "express";
import { generateRandomString } from "../utils/stringGenerator";
import querystring from "querystring";

dotenv.config()

const clientId = process.env.SPOTIFY_CLIENT_ID;
const redirectUri = process.env.SPOTIFY_REDIRECT_URI;

export const handleLogin = (req: Request, res: Response) => {
  const state = generateRandomString(16);
  const scope = 'user-read-private user-read-email';

  res.redirect('https://accounts.spotify.com/authorize?' +
    querystring.stringify({
      response_type: 'code',
      client_id: clientId,
      scope,
      redirect_uri: redirectUri,
      state
    }));
};
