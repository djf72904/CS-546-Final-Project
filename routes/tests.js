import express from "express";
import {createTest} from "../scripts/db/data/tests.js"
import { updateOverallProfileStats } from "../scripts/db/config/triggers.js";
import {levels} from "../constants.js";
import {Profile} from "../scripts/db/config/schema.js";
import {songs} from "../songs.js";
import {testHandler} from "../middleware.js";
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

router.get('/',  testHandler, async function(req, res, next) {

    const songsLst = (await Profile.findById(req.user)).favorite_songs
    const groups = groupByLevel(songs)

    return res.render('test', {songNames: (Object.values(markDefaultSongs(groups,  Object.entries(songsLst))).flat().filter(s=>s.default)).map(s=>s.name),
                                            songs: (Object.values(markDefaultSongs(groups,  Object.entries(songsLst))).flat().filter(s=>s.default)).map(s=>s.link),
                                            artists:(Object.values(markDefaultSongs(groups,  Object.entries(songsLst))).flat().filter(s=>s.default)).map(s=>s.artist)
                                            });
});

router.post('/', testHandler, async function(req, res, next) {



    let testInfo = {
        timestamp: new Date().getTime(),
        wpm: Math.round(req.body.wpm),
        song: req.body.song,
        options: req.body.options,
        missed_words: req.body.missed_words.filter(word => word !== "" && word !== null),
        level_reached: req.body.level_reached,
        type: req.body.type,
        accuracy: req.body.accuracy,
        content: req.body.content,
        time: req.body.time,
        layout: req.body.layout,
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