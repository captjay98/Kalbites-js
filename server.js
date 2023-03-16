// const express = require("express");
// const morgan = require("morgan");
// const mongoose = require("mongoose");

import express from "express";
import morgan from "morgan";
import mongoose from "mongoose";

const app = express();

app.set("view engine", "ejs");
app.use(morgan("dev"));
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


const dbURI = "mongodb://localhost/kalbites";
const db = mongoose.connection;
mongoose.connect(dbURI, { useNewUrlParser: true });


db.on("error", (err) => console.log(err))
db.once("open", () => console.log("Connected to Mongodb"))


app.listen(3333, console.log("Listening on Port 3333"));


const items = [
  { title: "cake", price: 5000 },
  { title: "Parfait", price: 2000 },
  { ttle: "brownie", price: 3000 }

]

const blogs = [
  { title: "Number 1 Crackhead Ninja", snippet: "Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat." },
  { title: "Number 1 legendary Sanin", snippet: "Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat." },
  { title: "The greatest Uchiha shinobi", snippet: "Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat." }
];

app.get("/", (req, res) => {
  res.render("home", { Items: items })
})

// app.get("/home", (req, res) => {
//   res.render("home");
// })

app.get("/chops", (req, res) => {
  res.render("chops");
})

app.get("/blogs", (req, res) => {
  res.render("blogs", { blogs: blogs })
})

import { irouter } from "./routes/items.js";
import { urouter } from "./routes/users.js";
import { brouter } from "./routes/blogs.js";

app.use("/items", irouter)
app.use("/users", urouter);
app.use("/blogs", brouter);


