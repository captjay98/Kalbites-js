const LocalStrategy = require("passport-local").Strategy;
const bcrypt = require("bcrypt");


function initialize(passport, getUserByPhone, getUserById) {
  const authenticateUser = async (phone, password, done) => {
    const user = getUserByPhone(phone)
    if (user == null) {
      return done(null, false, { message: "No registered User with Mobile Number" })
    }
    try {
      if (await bcrypt.compare(password, user.password)) {
        return done(null, user)
      } else {
        return done(null, false, { message: "Incorect Password" })
      }
    } catch (err) {
      return done(err)
    }


  }
  passport.use(new LocalStrategy(
    { usernameField: "phone" }, authenticateUser))
  passport.serializeUser((user, done) => done(null, user._id))
  passport.deserializeUser((id, done) => done(null, getUsrById(id)))
}

module.exports = initialize 
