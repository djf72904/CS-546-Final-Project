import express from "express";
import {createTest} from "../scripts/db/data/tests.js"
import { updateOverallProfileStats } from "../scripts/db/config/triggers.js";

let router = express.Router();

router.get('/', async function(req, res, next) {
    return res.render('test');
});

router.post('/test', async function(req, res, next) {
    //TODO: Error Check values in req.body
    createTest(req.user, req.body);
    updateOverallProfileStats(req.user, req.body);
    return res.render("/profile");

});

export default router;