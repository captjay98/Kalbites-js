const mongoose = require("mongoose")

const passportLocalMongoose = require('passport-local-mongoose')

const userSchema = new mongoose.Schema({

  // "type": "module"

  first: {
    type: String,
    required: true
  },

  last: {
    type: String,
    required: true
  },
  username: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: true,
    unique: true
  },

  address: {
    type: String,
    required: true
  },

  // password: {
  //   type: string,
  //   required: true
  // }
})


userSchema.plugin(passportLocalMongoose);


// userSchema.methods.authenticate = function(password) {
//   return this.password === this.hashPassword(password);
// }


const User = mongoose.model("User", userSchema);

module.exports = User;
