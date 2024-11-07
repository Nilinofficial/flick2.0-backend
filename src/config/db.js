import mongoose from "mongoose";

export const connectToDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
  } catch (err) {
    console.log(` error connecting to mongo ${err}`);
    // process.exit(1);
  }
};
