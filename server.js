// USED REACT FOR THE FRONTEND
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();
import express from "express";
import morgan from "morgan";
import dbConnect from "./middlewares/db.js";
import bodyParser from "body-parser";
import uRouter from "./routes/users.js";
import bRouter from "./routes/blogs.js";
import iRouter from "./routes/items.js";
import aRouter from "./routes/admin.js";
import redisClient from "./middlewares/redisManager.js";
const port = process.env.PORT || 3000;
const app = express();

app.use(morgan("dev"));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));

const corsOptions = {
  origin: ["http://localhost:5173", "https://kalbites.vercel.app"],
  methods: ["GET", "POST"],
  allowedHeaders: ["Content-Type", "Authorization"],
};

app.use(cors(corsOptions));

dbConnect().then(() => {
  redisClient.connect();
  app.listen(port, "0.0.0.0", () => console.log(`App running on Port ${port}`));
});

app.get("/", (req, res) => {
  res.status(200).json({ title: "Kalbites" });
});

app.use("/items", iRouter);
app.use("/users", uRouter);
app.use("/blogs", bRouter);
app.use("/admin", aRouter);

app.use((req, res, next) => {
  res.status(404).json({ message: "Page not Found" });
  next();
});
