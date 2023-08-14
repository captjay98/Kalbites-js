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

const app = express();

app.use(morgan("dev"));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));

const corsOptions = {
  origin: ["http://localhost:5173"], // Add the allowed origins here
  methods: ["GET", "POST"], // Add the allowed HTTP methods here
  allowedHeaders: ["Content-Type", "Authorization"], // Add the allowed headers here
};

app.use(cors(corsOptions));

dbConnect().then(() => {
  redisClient.connect();
  app.listen(3333, () => console.log("App running on Port 3333"));
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
