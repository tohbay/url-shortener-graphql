import express from "express";
import shortid from "shortid";
import validUrl from "valid-url";
import dotenv from 'dotenv';

dotenv.config()

import Url from '../model/url.model'

export const createShortUrl = async (originalUrl: string) => {
  const baseUrl: string = `${process.env.BASE_URL}`;

const response = express.response;
  // console.log('response', response)
  // console.log('>>>>', response)

  console.log(baseUrl)

  if (!validUrl.isUri(baseUrl)) {
    return response.status(401).json("Internal error. Please come back later.");
  }

  const shortUrlCode: string = shortid.generate();
  console.log(shortid.generate())
  console.log(shortUrlCode)
  console.log(shortUrlCode.substring(0, 6))
  console.log(shortid.generate())
  console.log(shortid.generate().substring(0, 6))

  if (validUrl.isUri(originalUrl)) {
    try {
      let shortenedUrl = await Url.findOne({ originalUrl });

      if (shortenedUrl) {
        return response.status(200).json(shortenedUrl);
      } else {
        const shortUrl = `${baseUrl}/${shortUrlCode}`;
        shortenedUrl = new Url({
          originalUrl,
          shortUrl,
          shortUrlCode,
          clickCount: 0,
        });

        await shortenedUrl.save();
        return response.status(200).json(shortenedUrl);
      }
    } catch (error) {
      console.error(error.message);
      return response.status(500).json("Internal Server Error: " + error.message);
    }
  } else {
    response
      .status(400)
      .json("Invalid URL. Please enter a valid url for shortening.");
  }
};

