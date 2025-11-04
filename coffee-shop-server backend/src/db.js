import mongoose from "mongoose";

export async function connectDB(uri, dbName) {
  try {
    await mongoose.connect(uri, { dbName });
    console.log("Connected to MongoDB"); // success message required by sheet
  } catch (err) {
    console.error(`MongoDB connection failed: ${err?.message || "no response"}`); // failure message format
    process.exit(1);
  }
}
