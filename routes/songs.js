import express from "express";
import {getProfile} from "../scripts/db/data/profiles.js";
import {Profile} from "../scripts/db/config/schema.js";
let router = express.Router();
import {songs} from '../songs.js'


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

    console.log(markDefaultSongs(groups,  Object.entries(songsLst)))

    res.render('songs', {
        songs: markDefaultSongs(groups,  Object.entries(songsLst))
    });
});

function updateLevelData(input, data) {
    const [level, index] = input.split('_').map(Number);

    return data.map(([lvl, idx]) => {
        if (parseInt(lvl) === level) {
            return [lvl, index.toString()];
        }
        return [lvl, idx];
    });
}


function arrayToObject(data) {
    return data.reduce((obj, [level, index]) => {
        obj[level] = index;
        return obj;
    }, {});
}


router.post('/', async function(req, res, next) {

    const songsLst = (await Profile.findById(req.user)).favorite_songs


    const input = req.body.data

    try{
        await Profile.updateOne({_id: req.user}, {favorite_songs: arrayToObject(updateLevelData(input, Object.entries(songsLst)))})
        return res.status(200).send({})

    }
    catch{
        return res.status(500).send({})
    }



})

export default router;