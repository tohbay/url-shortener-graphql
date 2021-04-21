import express, { Application, Request, Response } from 'express';
import dotenv from 'dotenv'

import connectDB from './connectdb/connectdb'

dotenv.config()
connectDB()

const app: Application = express();
const PORT: string = `${process.env.PORT}`;

app.get('/', (req: Request, res: Response) =>{
  return res.send('Welcome to our url shortener application!')
})

app.listen(PORT, () => console.log(`App is running on port ${PORT}`))