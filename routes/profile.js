import express from "express";
import {getProfile} from "../scripts/db/data/profiles.js";
let router = express.Router();


router.get('/', async function(req, res, next) {


    // getting the user's profile data
    const profileData = await getProfile(req.user);

    //get friends here
    //get recent tests here
    //get posts by user here

    res.render('profile', {
        profile: profileData,
        friends: [],
        recentTests: [],
        posts: [],
    });
});

export default router;