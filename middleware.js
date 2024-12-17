import {verifyToken} from "./scripts/handlers/authHandlers.js";
import {getProfile} from "./scripts/db/data/profiles.js";
import jwt from "jsonwebtoken";

//Makes sure that only authenticated users can access certain routes

const protectedRoutesPaths = [
    "/test",
    "/feed",
    "/leaderboard",
    "/profile",
    "/settings/songs",
    
];


export function protectedRoutes(req, res, next) {
    if (protectedRoutesPaths.includes(req.path) && !req.user) {
        return res.redirect('/login');
    }
    next();
}



export const routerInfo = (req, res, next) => {
    console.log(`[${new Date().toLocaleTimeString()}] ${req.method} ${req.path}`);
    next();
};

export default async function isUserLoggedIn(req, res, next) {

    try {
        const jsonWebToken = req.cookies.token;


        if (!jsonWebToken) {
            return next();
        }

        jwt.verify(jsonWebToken, 'CS546Secret!!23!!', async (error, decodedToken) => {
            if (error) {
                return next();
            }

            req.user = decodedToken.id;

            next();
        });
    } catch (err) {
        next();
    }
}

export const profileHandler = (req, res, next) => {
    if(!req.user) {
        return res.redirect('login');
    }
    next();
}

export const testHandler = (req, res, next) => {
    if(!req.user) {
        return res.redirect('login');
    }
    next();
}


export const authHandlers = (req, res, next) => {
    if(req.user) {
        return res.redirect('profile');
    }
    next()
}

export const leaderboardHandler = (req, res, next) => {
    if(!req.user) {
        return res.redirect('login');
    }
    next()
}

export const postsHandler = (req, res, next) => {
    if(!req.user) {
        return res.redirect('login');
    }
    next()
}