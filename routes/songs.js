import express from "express";
import {getProfile} from "../scripts/db/data/profiles.js";
let router = express.Router();


router.get('/', async function(req, res, next) {


    //get users songs from profileId

    res.render('songs', {
        songs: []
    });
});

export default router;