import express from "express";
import {getProfile} from "../scripts/db/data/profiles.js";
import {getAllTests} from "../scripts/db/data/tests.js";
import {levels} from "../constants.js";
import {getSong} from "../scripts/db/data/songs.js";
import {getFriends} from "../scripts/db/data/friends.js";
let router = express.Router();


router.get('/', async function(req, res, next) {


    //TODO: Get global leaderboard

    const allTests = await getAllTests()

    //create averages for each stat
    const avg_wpm = Array.from(allTests).reduce((a, b)=>{
        return a + b.wpm
    }, 0) / Array.from(allTests).length

    const topTest = Array.from(allTests).sort((a, b) => b.wpm - a.wpm)[0]

    const maxLevel = levels.findIndex(level => topTest.wpm >= level.lowerBound && topTest.wpm < level.upperBound) + 1
    let topFive = Array.from(allTests).sort((a, b) => b.wpm - a.wpm).slice(0, 5).map(async test => {
        return {
            ...test.toObject(),
            level: levels.findIndex(level => test.wpm >= level.lowerBound && test.wpm < level.upperBound) + 1,
            profile: await getProfile(test.user_id),
            song: test.song
        }
    })

    const friends = (await getFriends(req.user)).filter(r=>[
        r.user_1 === req.user || r.user_2 === req.user
    ]).map(f=>{
        return f.user_1 === req.user ? f.user_2 : f.user_1
    })



    let friendsTopFive = Array.from(allTests).filter(f=>{
        return friends.includes(f.user_id)
    }).sort((a, b) => b.wpm - a.wpm).slice(0, 5).map(async test => {
        return {
            ...test.toObject(),
            level: levels.findIndex(level => test.wpm >= level.lowerBound && test.wpm < level.upperBound) + 1,
            profile: await getProfile(test.user_id),
            song: test.song
        }
    })


    const avg_accuracy = Array.from(allTests).reduce((a, b)=>{
        return a + (b.missed_words.length / b.content.split(" ").length)
    }, 0) / Array.from(allTests).length

    // console.log(await Promise.all(friendsTopFive))

    res.render('leaderboard', {
        friends: await Promise.all(friendsTopFive),
        leaderboard: await Promise.all(topFive),
        avg_wpm: avg_wpm.toString(),
        max_wpm: topTest.wpm,
        max_level: maxLevel,
        avg_accuracy: (1 - avg_accuracy.toFixed(2)) * 100,
    });
});

export default router;