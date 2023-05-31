// USED EJS FOR THE FRONTEND


const dotenv = require("dotenv");
dotenv.config();
const express = require("express")
const morgan = require("morgan")
const mongoose = require("mongoose")
const redisClient = require("./redis_manager")
const session = require("express-session")
const flash = require("express-flash")
const passport = require("passport")
const connectEnsureLogin = require("connect-ensure-login")
const methodOverride = require("method-override");
const bodyParser = require("body-parser")
const Item = require("./models/item.js")
const User = require("./models/user.js")
const Order = require("./models/order.js")
const brouter = require("./routes/blogs")
const irouter = require("./routes/items")


const app = express();

app.set("view engine", "ejs");
app.use(morgan("dev"));
app.use(express.static("public"));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(flash())
app.use(session({
  // store: redisStore,
  secret: process.env.SESSION_KEY,
  resave: false,
  saveUninitialized: false,
  cookie: { maxAge: 60 * 60 * 1000 }
}))
app.use(methodOverride('_method'));
app.use(passport.initialize())
app.use(passport.session())
passport.use(User.createStrategy())
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());



const dbURI = process.env.DB_URL;
const db = mongoose.connection;
mongoose.connect(dbURI, { useNewUrlParser: true })
  .then(() => {
    console.log("Connected to Mongodb")
    app.listen(3333, console.log("Listening on Port 3333"));
  })

db.on("error", (err) => console.log(err))




app.get("/", (req, res) => {
  if (req.isAuthenticated()) {
    res.render("home", { title: "Kalbites", name: req.user.username })

  } else {
    res.render("home", { title: "Kalbites" })
  }
})



app.post("/orderdetails", connectEnsureLogin.ensureLoggedIn(), async (req, res) => {
  const iid = await redisClient.get("itemid")
  console.log("Item id", iid)
  const uid = req.user._id
  console.log("User id", uid)
  try {
    const user = await User.find({ _id: uid })
    const chop = await Item.find({ _id: iid })
    const item = await new Order({
      buyer: user[0],
      chop: chop[0]
    }).save()
    console.log(item)
    res.render("confirm", { detail: item, title: "Order Placed" });
  } catch (error) {
    console.log(error)
    res.status(401).render("items/pay", { title: "Order Failed" })
  }
})



app.get("/login", (req, res) => {
  res.render("user/login", { title: "Login" });
})

app.get("/register", (req, res) => {
  res.render("user/register", { title: "Registration" });
})



app.post('/login', passport.authenticate('local',
  {
    failureRedirect: '/login',
    successRedirect: '/account',
    failureFlash: true
  }), function(req, res) {
    console.log(req.user._id)
    res.redirect('/account');
  });



app.post("/register", function(req, res) {
  User.register(new User({
    first: req.body.first_name,
    last: req.body.last_name,
    username: req.body.username,
    phone: req.body.phone_number,
    address: req.body.address,
  }), req.body.password, (err, user) => {
    if (err) {
      res.redirect("/register")
    }
    else {
      req.login(user, (err) => {
        if (err) {
          res.redirect("/register");
        }
        else {
          res.redirect("/account");
        }
      });
    }
  });
});



app.get("/account", connectEnsureLogin.ensureLoggedIn(), (req, res) => {
  console.log(req.user.username, req.sessionID, req.session.cookie.maxAge)
  res.render("user/account", { title: "Account Page", user: req.user, name: req.user.username });
})



app.delete("/login", (req, res, next) => {
  req.logout()
  res.redirect("/login")
})


app.use("/items", irouter)
// app.use("/user", urouter);
app.use("/blogs", brouter);


app.use((req, res, next) => {
  res.status(404).render("404", { title: "Page not Found" })
  next()
})




// const LocalStrategy = require('passport-local').Strategy;
// const urouter = require("./routes/users")
// const bcrypt = require("bcrypt") 
// const RedisStore = require("connect-redis").default
// let redisClient;

// (async () => {
//   redisClient = redis.createClient();

//   redisClient.on("error", (error) => console.error(`Error : ${error}`));

//   await redisClient.connect();
// })();



// redisClient.set("id", "item1")
// redisClient.get("id")
//   .then((idd) => console.log(idd)
//   )



// const redisStore = new RedisStore({
//   client: redisClient,
//   prefix: "kalbites:",
// })


// app.post("/register", async (req, res) => {

//   try {
//     const HashedPword = await bcrypt.hash(req.body.password, 10);
//     console.log(user)
//     return res.redirect("/login")

//   } catch (err) {
//     console.log(err)
//     return res.redirect("register")
//   }
//   res.render("user/register", { title: "Registration" });
// })

// module.exports = {
//   redisClient: Client,
// }
// try {
//   await mongoose.connect(dbURI, { useNewUrlParser: true })
//   console.log("Connected to Mongodb")
// } catch (err) {
//   hanldeError(err);
//   console.log(err)
// }

// db.on("error", (err) => console.log(err))
// db.once("open", () => console.log("Connected to Mongodb"))



// const items = [
//   { title: "cake", price: 5000 },
//   { title: "Parfait", price: 2000 },
//   { ttle: "brownie", price: 3000 }
// ]


// const blogs = [
//   { title: "Number 1 Crackhead Ninja", snippet: "Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat." },
//   { title: "Number 1 legendary Sanin", snippet: "Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat." },
//   { title: "The greatest Uchiha shinobi", snippet: "Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat." }
// ];
