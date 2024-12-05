import express from "express";
import {getProfile} from "../scripts/db/data/profiles.js";
let router = express.Router();


router.get('/', async function(req, res, next) {


    //TODO: Get global leaderboard

    res.render('leaderboard', {
        leaderboard: [],
    });
});

export default router;