import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

export const connectDb = () => {
  try {
    mongoose.set("strictQuery", true);
    const result = mongoose.connect(process.env.MONGO_URL);
    result && console.log("mongo Connected");
  } catch (error) {
    console.log(error);
  }
};
