import express from "express";
import {getProfile, getUserByDisplayName} from "../../scripts/db/data/profiles.js";
import jwt from "jsonwebtoken";
import {createFriends, deleteFriends} from "../../scripts/db/data/friends.js";
import xss from "xss";

const router = express.Router();

router.post('/', async (req, res) => {

    req.body.username = xss(req.body.username);

    const {username} = req.body;
    const profile = await getUserByDisplayName(username)

    if(!profile){
        res.status(404).send("Profile not found");
    }

    if(profile.id === req.user){
        res.status(401).send("Unable to add yourself as a friend");
    }

    else{
        let entry = await createFriends(
            req.user,
            profile.id,
        )

        if(!entry)
            return res.status(400).send(
                "You are already friends with this user"
            )

        entry = req.user === entry.user_1 ? await getProfile(entry.user_2) : await getProfile(entry.user_1)


        res.status(200).send(entry);
    }
});

router.delete('/', async (req, res) => {
    const {id} = req.body;
    await deleteFriends(id)
    res.status(200).send(true);
})

export default router;