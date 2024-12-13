import express from "express";
import {createTest} from "../scripts/db/data/tests.js"
import { updateOverallProfileStats } from "../scripts/db/config/triggers.js";
import {levels} from "../constants.js";

let router = express.Router();

router.get('/', async function(req, res, next) {
    return res.render('test');
});

router.post('/', async function(req, res, next) {


    let missedWords = []
    for(let i=0; i<req.body.missed_words.length; i++) {
        if(req.body.missed_words[i] !== ""){
            missedWords.push(req.body.missed_words[i]);
        }
    }

    let testInfo = {
        timestamp: new Date().getTime(),
        wpm: Math.round(req.body.wpm),
        options: req.body.options,
        missed_words: missedWords,
        level_reached: levels.findIndex(level => req.body.wpm >= level.lowerBound && req.body.wpm < level.upperBound) + 1,
        type: req.body.type,
        content: req.body.content,
        time: req.body.time
    }

    if(testInfo.type !== "time"){
        testInfo.time = 0
    }

    try{
        await createTest(req.user, testInfo);
    }
    catch(e){
        return res.status(400).send("Error creating test");
    }

    await updateOverallProfileStats(req.user, testInfo);
    return res.render("/profile");

});

export default router;