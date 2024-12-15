import express from "express";
import {createTest} from "../scripts/db/data/tests.js"
import { updateOverallProfileStats } from "../scripts/db/config/triggers.js";
import {levels} from "../constants.js";

let router = express.Router();

router.get('/', async function(req, res, next) {
    return res.render('test');
});

router.post('/', async function(req, res, next) {


    //Input validation

    if(!req.body.wpm || typeof req.body.wpm !== "number"){
        return res.status(400).send({message: "Error: Wpm not supplied"})
    }
    if(!req.body.options || !Array.isArray(req.body.options)){
        return res.status(400).send({message: "Error: Options not supplied"})
    }
    if(!req.body.missed_words || !Array.isArray(req.body.missed_words)){
        return res.status(400).send({message: "Error: missedWords not supplied"})
    }
    if(!req.body.type.trim() || typeof req.body.type !== "string" || req.body.type.trim().length === 0){
        return res.status(400).send({message: "Error: type not supplied"})
    }
    if(!req.body.content.trim() || typeof req.body.content !== "string" || req.body.content.trim().length === 0){
        return res.status(400).send({message: "Error: content not supplied"})
    }
    if(!req.body.time || typeof req.body.time !== "number"){
        return res.status(400).send({message: "Error: time not supplied"})
    }

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

    let test;

    try{
        test = await createTest(req.user, testInfo);
    }
    catch(e){
        return res.status(400).send("Error creating test");
    }


    return res.status(200).send(test);

});

export default router;