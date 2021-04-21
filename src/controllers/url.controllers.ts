import { Request } from "express";
import Url from "../model/url.model";
import { createShortUrl } from '../services/url.service'

export const createShortUrlController = (request: Request) => {
  console.log(request.body)
  const { originalUrl } = request.body;
    const shortUrl = new Url(createShortUrl(originalUrl));
    return shortUrl;
  }
