import express from 'express'
import { createShortUrlController } from '../controllers/url.controllers'

const shortUrlRoute = express.Router()

shortUrlRoute.post('/', createShortUrlController)

export default shortUrlRoute