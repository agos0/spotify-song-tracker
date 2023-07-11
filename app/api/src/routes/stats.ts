import * as express from "express";
import axios from "axios";

export const route = (app:express.Application) => {
  app.get('/me/stats', async (req, res) => {
    try {
      const accessToken = req.headers.authorization || req.query.accessToken;
      const response = await axios.get('https://api.spotify.com/v1/me/top/tracks', {
      headers: {
        'Authorization': `Bearer ${accessToken}`
      },
      params: {
      time_range: 'medium_term',
      limit: 10
    }
      });

      const tracks = response.data.items.map((track: any) => {
        return {
          name: track.name,
          artist: track.artists[0].name,
          albumCover: track.album.images[0].url
        };
      });

      res.json(tracks);
    } catch (error) {
        // tslint:disable-next-line:no-console
        console.log(error);
    }
  })
}