const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");

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

app.get("/", (req, res) => {
  res.render("temp.ejs", { Items: items })
})
