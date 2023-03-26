const User = require("../models/user.js")
const Order = require("../models/order.js")
const bcrypt = require("bcrypt")
const passport = require("passport")
const LocalStrategy = require('passport-local').Strategy;
const initializePassport = require("../passportConfig");
const connectEnsureLogin = require("connect-ensure-login")


initializePassport(
  passport,
  phone => User.findOne({ phone: phone }),
  id => User.findById(id)
)


passport.initialize()
passport.session()

// const login_index = (notAuth, (req, res) => {

//   res.render("user/login", { title: "Login" });
// })


// const login_index_post = (notAuth, (req, res) => {
//   passport.authenticate("local", {
//     successRedirect: "/user/account",
//     failureRedirect: "/login",
//     failureFlash: true,
//   })
//   console.log(req.body.phone)
//   console.log(req.body.password)
//   res.render("user/login", { title: "Login" });
// })


// res.render("user/login", { title: "Login" });
// const login_index_post = (passport.authenticate('local',
//   {
//     failureRedirect: '/',
//     successRedirect: "user/account",
//   }),
//   (req, res) => {
//     connectEnsureLogin
//     console.log(req.user)
//     res.redirect('user/account');
//   });


const register_Index = (notAuth, (req, res) => {
  res.render("user/register", { title: "Registration" });
})


const register_Index_post = (notAuth, async (req, res) => {

  try {
    const HashedPword = await bcrypt.hash(req.body.password, 10);
    const user = await new User({
      first: req.body.first_name,
      last: req.body.last_name,
      phone: req.body.phone_number,
      address: req.body.address,
      password: HashedPword,
    }).save()
    console.log(user)
    return res.redirect("/")

  } catch (err) {
    console.log(err)
    return res.redirect("user/register")
  }
  res.render("user/register", { title: "Registration" });
})

const profile_index = (connectEnsureLogin.ensureLoggedIn(), (req, res) => {
  console.log(req.username, req.sessionID, req.session.cookie.maxAge)
  res.render("user/account", { title: "Account Page" });
})


const logout_index = (req, res, next) => {
  req.logout()
  res.redirect("user/login")
}


function checkhAuth(req, res, next) {
  if (req.isAuthenticated()) {
    return next()
  }
  res.redirect("/user/login")
}


function notAuth(req, res, next) {
  if (req.isAuthenticated()) {
    return res.redirect("/")
  }
  next()
}



module.exports = {
  register_Index,
  profile_index,
  register_Index_post,
  logout_index
}
