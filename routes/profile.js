import express from "express";
import {getProfile, getUserByDisplayName} from "../scripts/db/data/profiles.js";
import {getAllPostsByUser} from "../scripts/db/data/posts.js";
import {getAllTestsByUser} from "../scripts/db/data/tests.js";
import {levels} from "../constants.js";
import {getFriends} from "../scripts/db/data/friends.js";
let router = express.Router();

// ROUTE: GET CURRENT USER PROFILE
router.get('/', async function(req, res, next) {
    // Should I do this in a try catch as well?

    // GET PROFILE DATA
    const profileData = await getProfile(req.user);
    const posts = await getAllPostsByUser(req.user);
    const recentTests = await getAllTestsByUser(req.user);
    const modTest = recentTests.map(rt=> {
        return {
            ...rt.toObject(),
            level: levels.findIndex(level => rt.wpm >= level.lowerBound && rt.wpm < level.upperBound) + 1,
        };
    })
    const friends = await getFriends(req.user);
    const deepFriend = friends.map(async f=>{
        return {
            ...f.toObject(),
            user_1: await getProfile(f.user_1),
            user_2: await getProfile(f.user_2),
        };
    })

    // RENDER
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

// ROUTE: GET PROFILE BY DISPLAY NAME
router.get('/:display_name', async function(req, res, next) {
    let status = 500;
    let id;

    try{
        // CHECK: user_id is valid
        id = (await getUserByDisplayName(req.params.display_name))?._id

        if(!id){
            status = 404;
            throw new Error(
                `User with display name ${req.params.display_name} does not exist`,
            )
        }

        // GET PROFILE DATA
        const profileData = await getProfile(id);
        const recentTests = await getAllTestsByUser(id)
        const modTest = recentTests.map(rt=> {
            return {
                ...rt.toObject(),
                level: levels.findIndex(level => rt.wpm >= level.lowerBound && rt.wpm < level.upperBound) + 1,
            }
        })
        const friends = await getFriends(req.user);

        // VISIBILITY OF PROFILE
        // CHECK: user_id friends with requesting user
        if(!Array.from(friends).find(f=>{
            console.log((f.user_1 === req.user && f.user_2 === id) || (f.user_2 === req.user && f.user_1 === id))
            return (f.user_1 === req.user && f.user_2 === id) || (f.user_2 === req.user && f.user_1 === id)
        })) {
            throw new Error(`You are not friends with ${req.params.display_name} and cannot view their profile.`,);
        }

        // RENDER
        return res.render('profile', {
            profile: profileData,
            friends: [],
            tests: modTest.sort((a,b) => b.timestamp - a.timestamp),
            posts: [],
            testsForWordLength: modTest.filter(test=>test.type === 'wordLength').length,
            testsForTime: modTest.filter(test=>test.type === 'time').length,
            self: false
        });
    } catch(e){
        return res.status(status).render('error', {
            error: {
                status: status,
                message: e.message,
            }
        })
    }

})

export default router;