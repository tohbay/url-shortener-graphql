import {model, Schema, Model, Document } from 'mongoose'

interface IUrl extends Document {
  shortUrlCode: String;
  originalUrl: String;
  shortUrl: String;
  clickCount: Number;
}

const UrlSchema: Schema = new Schema({
  shortUrlCode: { type: String, required: true },
  originalUrl: { type: String, required: true },
  shortUrl: { type: String, required: true },
  clickCount: { type: Number, required: true },
})

const Url: Model<IUrl> = model('Url', UrlSchema)

export default Url