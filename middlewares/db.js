import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const dbConnect = async () => {
  const dbURI = process.env.DB_URI;
  console.log(dbURI);
  try {
    // "mongodb+srv://noder:noder@cluster0.xbadjti.mongodb.net/kalbites?retryWrites=true&w=majority";

    await mongoose.connect(dbURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Failed to connect to MongoDB:", error);
    process.exit(1);
  }
};

export default dbConnect;
