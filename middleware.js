import jwt from "jsonwebtoken";
import {verifyToken} from "./scripts/handlers/authHandlers.js";

//Makes sure that only authenticated users can access certain routes
const protectedRoutes = [
    ""
];


export const authChecker = (req, res, next) => {
    const token = req.cookies.token;


    if (!token) {
        return res.render("login");
    }

    jwt.verify(token, 'CS546Secret!!23!!', (err, user) => {
        if (err) {
            return res.redirect("/login");
        }
        req.user = user; // Add user info to the request object
        next();
    });
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