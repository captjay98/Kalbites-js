import User from "../models/user.js";
import Order from "../models/order.js";
import dotenv from "dotenv";
dotenv.config();
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { registerSchema, loginSchema } from "../middlewares/validators.js";
const secret = "HelloWorld55";

export const userRegistration = async (req, res) => {
  try {
    const { error } = registerSchema.validate(req.body);
    if (error) {
      return res.status(422).json({ errors: error.details });
    }

    const { firstName, lastName, phone, address, password, account_type } = req.body;

    const phoneExists = await User.findOne({ phone });

    if (phoneExists) {
      return res.status(400).json({ message: "Phone already exists" });
    }

    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    const user = await User.create({
      firstName,
      lastName,
      phone,
      address,
      password: hashedPassword,
      account_type,
    });

    const token = jwt.sign({ userId: user._id }, secret);
    return res.status(201).json({ user, token });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Server error" });
  }
};

export const userLogin = async (req, res) => {
  try {
    const { error } = loginSchema.validate(req.body);
    if (error) {
      return res.status(422).json({ errors: error.details });
    }

    const { userName, password } = req.body;

    const user = await User.findOne({ userName });
    if (!user) {
      return res.status(401).json({ message: "Invalid UserName" });
    }

    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) {
      return res.status(401).json({ message: "Invalid Password" });
    }

    const token = jwt.sign({ userId: user._id }, secret);
    return res.status(200).json({ user, token });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Server error" });
  }
};

export const userProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user).select("-password");
    console.log(user);
    return res.status(200).json({ user });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Server Error" });
  }
};

export const userLogout = (req, res, next) => {
  req.logout();
  res.redirect("user/login");
};
