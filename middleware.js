import jwt from "jsonwebtoken";
import {verifyToken} from "./scripts/authHandler.js";

const protectedRoutes = [
  ""
];


export const authChecker = (req, res, next) => {
  const token = req.cookies.token;


  if (!token) {
    return res.render("login");
  }

  try {
    const decoded = jwt.verify(token, "CS546Secret!!23!!");
    req.user = decoded.id;
    next();
  } catch (err) {
    return res.render("login");

  }

}

export const routerInfo = (req, res, next) => {
  console.log(`[${new Date().toLocaleTimeString()}] ${req.method} ${req.path}`);
  next();
};


export const authSendHandler = (req, res, next) => {

  res.locals.isAuthenticated = false

  const token = req.cookies.token;

  if (token) {
    try {
      const user = verifyToken(token);
      res.locals.isAuthenticated = true;  // Set authenticated flag
      req.user = user;  // Attach the user to the request
    } catch (err) {
      res.locals.isAuthenticated = false;
    }
  } else {
    res.locals.isAuthenticated = false; // Not authenticated
  }

  next(); // Continue to the next middleware
};