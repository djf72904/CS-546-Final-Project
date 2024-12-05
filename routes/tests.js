import express from "express";
import {getProfile} from "../scripts/db/data/profiles.js";
import {plainWords} from "../constants.js";
let router = express.Router();





router.get('/', async function(req, res, next) {


    //TODO: Get global leaderboard


    res.render('test');
});

export default router;