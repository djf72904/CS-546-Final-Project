import express from "express";
import {deleteProfileAndUser, editDisplayName, getProfile, getUserByDisplayName} from "../scripts/db/data/profiles.js";
import {getAllPostsByUser} from "../scripts/db/data/posts.js";
import {getAllTestsByUser} from "../scripts/db/data/tests.js";
import {levels} from "../constants.js";
import {getFriends} from "../scripts/db/data/friends.js";
import {profileHandler} from "../middleware.js";
import xss from "xss";
let router = express.Router();




router.get('/', profileHandler, async function(req, res, next) {


    // getting the user's profile data
    const profileData = await getProfile(req.user);

    const posts = await getAllPostsByUser(req.user)

    const recentTests = await getAllTestsByUser(req.user)

    const modTest = recentTests.map(rt=> {
        return {
            ...rt.toObject(),
            level: levels.findIndex(level => rt.wpm >= level.lowerBound && rt.wpm < level.upperBound) + 1,
        }
    })

    const friends = await getFriends(req.user);

    const deepFriend = friends.map(async f=>{
        return {
            ...f.toObject(),
            user_1: await getProfile(f.user_1),
            user_2: await getProfile(f.user_2),
        }
    })

    res.render('profile', {
        profile: profileData,
        friends: await Promise.all(deepFriend),
        tests: modTest.sort((a,b) => b.timestamp - a.timestamp),
        posts: posts,
        testsForWordLength: modTest.filter(test=>test.type === 'wordLength').length,
        testsForTime: modTest.filter(test=>test.type === 'time').length,
        self: true
    });
});


router.get('/:display_name', async function(req, res, next) {

    let status = 500;


    let currentUser = await getProfile(req.user);
    if(req.params.display_name === (currentUser.display_name)) {
        console.log("match")
        return res.redirect("/profile");
    }

    let id;
    try{
        id = (await getUserByDisplayName(req.params.display_name))?._id

        if(!id){
            status = 404;
            throw new Error(
                `User with display name ${req.params.display_name} does not exist`,
            )
        }

        const profileData = await getProfile(id);

        const recentTests = await getAllTestsByUser(id)

        const modTest = recentTests.map(rt=> {
            return {
                ...rt.toObject(),
                level: levels.findIndex(level => rt.wpm >= level.lowerBound && rt.wpm < level.upperBound) + 1,
            }
        })

        const friends = await getFriends(req.user);

        if(!Array.from(friends).find(f=>{
            return (f.user_1 === req.user && f.user_2 === id) || (f.user_2 === req.user && f.user_1 === id)
        })){
            throw new Error(
                `You are not friends with ${req.params.display_name} and cannot view their profile.`,
            )
        }

        const deepFriend = friends.map(async f=>{
            return {
                ...f.toObject(),
                user_1: await getProfile(f.user_1),
                user_2: await getProfile(f.user_2),
            }
        })

        return res.render('profile', {
            profile: profileData,
            friends: await Promise.all(deepFriend),
            tests: modTest.sort((a,b) => b.timestamp - a.timestamp),
            posts: await getAllPostsByUser(id),
            testsForWordLength: modTest.filter(test=>test.type === 'wordLength').length,
            testsForTime: modTest.filter(test=>test.type === 'time').length,
            self: false
        });
    }
    catch(e){
        return res.status(status).render('error', {
            error: {
                status: status,
                message: e.message,
            }
        })
    }
})



router.delete('/', async function(req, res, next) {
    if(!req.user){
        return res.status(401).send("Unauthorized")
    }
    try{
        await deleteProfileAndUser(req.user);
        req.user = null;
        res.clearCookie("token");

        return res.status(200).send({success: true})

    }
    catch(e){
        console.log(e)
        return res.status(500).send(e);
    }
})

router.patch('/', async function(req, res, next) {

    req.body.display_name = xss(req.body.display_name)

    if(!req.user){
        return res.status(401).send("Unauthorized")
    }

    if(!req.body.display_name.trim()){
        return res.status(400).send("Display Name not supplied")
    }
    try{
        if(!await editDisplayName(req.user, req.body.display_name)){
            return new Error("Display name taken")
        }
        return res.status(200).send({})
    }
    catch(e){
        return res.status(500).send(e);
    }

})
export default router;