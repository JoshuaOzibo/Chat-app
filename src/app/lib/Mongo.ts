import mongoose from "mongoose";


mongoose.connections[0].readyState ? console.log('MongoDB already connected') : 'MongoDB not connected'

const connectDB = async () => {
  if (mongoose.connections[0].readyState) {
    console.log("✅ MongoDB already connected");
    return;
  }

  try {
    await mongoose.connect(process.env.MONGO_URI!);
    console.log("✅ MongoDB connected successfully");
  } catch (error) {
    console.error("❌ MongoDB connection error:", error);
  }
};

export default connectDB;
