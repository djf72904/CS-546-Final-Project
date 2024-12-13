import express from "express";
import {createTest} from "../scripts/db/data/tests.js"
import { updateOverallProfileStats } from "../scripts/db/config/triggers.js";
import {levels} from "../constants.js";

let router = express.Router();

router.get('/', async function(req, res, next) {
    return res.render('test');
});

router.post('/', async function(req, res, next) {
    //TODO: Error Check values in req.body

    let testInfo = {
        timestamp: new Date().getTime(),
        wpm: req.body.wpm,
        options: req.body.options,
        missed_words: req.body.missedWords,
        level_reached: levels.findIndex(level => req.body.wpm >= level.lowerBound && req.body.wpm < level.upperBound) + 1,
        type: req.body.currentSetting,
        content: req.body.currentSequence
    }
    console.log(req.body)
    console.log(testInfo)

    await createTest(req.user, testInfo);
    await updateOverallProfileStats(req.user, testInfo);

    return res.render("/profile");

});

export default router;