import mongoose from "mongoose";
const mongoUrl = "mongodb://localhost:27017/online_ntdl/";

export const connectMongoDb = async () => {
  try {
    const conn = await mongoose.connect(mongoUrl);
    conn && console.log("DB CONnected");
  } catch (error) {
    console.log(error);
  }
};
