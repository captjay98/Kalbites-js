import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();
const secret = "HelloWorld55";

const getCurrentUser = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return next();
  }

  const token = authHeader.split(" ")[1];

  try {
    const decodedToken = jwt.verify(token, secret);
    console.log("decodedToken:", decodedToken);
    req.user = decodedToken.userId;
    console.log("req.user:", req.user);
    next();
  } catch (error) {
    console.log(error);

    return next();
  }
};

export default getCurrentUser;

function requireRole(role) {
  return function (req, res, next) {
    if (req.user && req.user.account_type === role) {
      next();
    } else {
      res.status(403).send("Forbidden");
    }
  };
}
