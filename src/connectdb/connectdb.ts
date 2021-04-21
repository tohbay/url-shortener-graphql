import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config();

const connectDB = async () => {
  try {
    await mongoose.connect(`${process.env.MONGO_DB_URI}`, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log("Connected to DB");
  } catch (error) {
    console.error(error.message);
  }
};

export default connectDB
  
