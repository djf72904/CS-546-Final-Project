import express from "express";
import {createTest} from "../scripts/db/data/tests.js"
import { updateOverallProfileStats } from "../scripts/db/config/triggers.js";
import {levels} from "../constants.js";
import {Profile} from "../scripts/db/config/schema.js";
import {songs} from "../songs.js";
let router = express.Router();


function groupByLevel(songs) {
    return songs.reduce((acc, song) => {
        if (!acc[song.level]) {
            acc[song.level] = [];
        }
        acc[song.level].push(song);
        return acc;
    }, {});
}

function markDefaultSongs(groupedSongs, levelIndexPairs) {
    const updatedSongs = { ...groupedSongs };

    levelIndexPairs.forEach(([level, index]) => {
        if (updatedSongs[level] && updatedSongs[level][index]) {
            updatedSongs[level][index] = {
                ...updatedSongs[level][index],
                default: true
            };
        }
    });
    for (const level in updatedSongs) {
        updatedSongs[level] = updatedSongs[level].map((song) => {
            if (!song.default) {
                song.default = false;
            }
            return song;
        });
    }

    return updatedSongs;
}

router.get('/', async function(req, res, next) {

    const songsLst = (await Profile.findById(req.user)).favorite_songs
    const groups = groupByLevel(songs)

    return res.render('test', {songNames: (Object.values(markDefaultSongs(groups,  Object.entries(songsLst))).flat().filter(s=>s.default)).map(s=>s.name),
                                            songs: (Object.values(markDefaultSongs(groups,  Object.entries(songsLst))).flat().filter(s=>s.default)).map(s=>s.link),
                                            artists:(Object.values(markDefaultSongs(groups,  Object.entries(songsLst))).flat().filter(s=>s.default)).map(s=>s.artist)
                                            });
});

router.post('/', async function(req, res, next) {

    //Input validation
    if(!req.body.wpm || typeof req.body.wpm !== "number"){
        return res.status(400).send({message: "Error: Wpm not supplied"})
    }
    if(!req.body.options || typeof req.body.options !== "object" || (typeof req.body.options === "object" && Array.isArray(req.body.options))){
        return res.status(400).send({message: "Error: Options not supplied"})
    }
    if(!req.body.missed_words || !Array.isArray(req.body.missed_words)){
        return res.status(400).send({message: "Error: missedWords not supplied"})
    }
    if(!req.body.type.trim() || typeof req.body.type !== "string" || req.body.type.trim().length === 0){
        return res.status(400).send({message: "Error: type not supplied"})
    }
    if(typeof req.body.content !== "string"){
        return res.status(400).send({message: "Error: content not supplied"})
    }
    if(req.body.time && typeof req.body.time !== "number"){
        return res.status(400).send({message: "Error: time not supplied"})
    }
    if(!req.body.layout.trim() || typeof req.body.layout !== "string" || req.body.layout.trim().length === 0){
        return res.status(400).send({message: "Error: layout not supplied"})
    }
    if(!req.body.song || typeof req.body.song !== "object" || (typeof req.body.song === "object" && Array.isArray(req.body.song))){
        return res.status(400).send({message: "Error: song not supplied"})
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
        time: req.body.time,
        layout: req.body.layout,
        song: req.body.song
    }

    if(testInfo.type !== "time"){
        testInfo.time = 0
    }

    let test;

    try{
        test = await createTest(req.user, testInfo);
    }
    catch(e){
        console.log(e)
        return res.status(400).send("Error creating test");
    }

    try{
        await updateOverallProfileStats(req.user, testInfo);
    }catch(e){
        console.log(e)
        return res.status(400).send("Error updating profile stats");
    }

    return res.status(200).send(test);

});

export default router;