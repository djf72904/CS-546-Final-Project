import express from "express";
import {getProfile} from "../scripts/db/data/profiles.js";
let router = express.Router();


router.get('/', async function(req, res, next) {

    //TODO: Get posts from all friends

    res.render('feed', {
        posts: [],
    });
});

export default router;