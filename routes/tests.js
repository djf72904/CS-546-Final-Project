import express from "express";
import {createTest} from "../scripts/db/data/tests.js"
import { updateOverallProfileStats } from "../scripts/db/config/triggers.js";

let router = express.Router();

router.get('/', async function(req, res, next) {
    return res.render('test');
});

router.post('/', async function(req, res, next) {



    try{
        await createTest(req.user, req.body);
    }
    catch(e){
        return res.status(400).send("Error creating test");
    }

    await updateOverallProfileStats(req.user, req.body);
    return res.render("/profile");

});

export default router;