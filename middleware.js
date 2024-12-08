import {verifyToken} from "./scripts/handlers/authHandlers.js";
import {getProfile} from "./scripts/db/data/profiles.js";
import jwt from "jsonwebtoken";

//Makes sure that only authenticated users can access certain routes
const protectedRoutes = [
    ""
];



export const routerInfo = (req, res, next) => {
    console.log(`[${new Date().toLocaleTimeString()}] ${req.method} ${req.path}`);
    next();
};





export default async function isUserLoggedIn(req, res, next) {


    try {
        const jsonWebToken = req.cookies.token;

        if (!jsonWebToken) {
            console.log("User is not logged in");
            res.locals.user = null;
            return next();
        }

        jwt.verify(jsonWebToken, 'CS546Secret!!23!!', async (error, decodedToken) => {
            if (error) {
                console.error("Token verification failed:", error.message);
                res.locals.user = null;
                return next();
            }

            try {
                console.log("Token is valid, fetching user profile...");
                const user = await getProfile(decodedToken.id);
                if (!user) {
                    console.warn("No user found for ID:", decodedToken.id);
                }
                res.locals.user = user || null;
                res.locals.display_name = user?.display_name.toString();
            } catch (fetchError) {
                console.error("Failed to fetch user profile:", fetchError.message);
                res.locals.user = null;
            }

            next();
        });
    } catch (err) {
        console.error("Unexpected error in isUserLoggedIn middleware:", err.message);
        res.locals.user = null;
        next();
    }
}
