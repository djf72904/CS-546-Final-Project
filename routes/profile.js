import express from "express";
import {getProfile} from "../scripts/db/data/profiles.js";
let router = express.Router();


router.get('/', async function(req, res, next) {


    // getting the user's profile data
    const profileData = await getProfile(req.user.id);

    //get friends here
    //get recent tests here

    res.render('profile', {
        profile: profileData,
        friends: [],
        recentTests: []
    });
});

export default router;