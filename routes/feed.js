import express from "express";
import {createPost, getAllPosts} from "../scripts/db/data/posts.js";
let router = express.Router();


router.get('/', async function(req, res, next) {

    const posts = await getAllPosts(req.user)

    res.render('feed', {
        posts: posts,
    });
});

router.post('/', async function(req, res, next) {
    try{
        await createPost({
            user_id: req.user,
            test_id: req.body.test_id,
            content: req.body.content,
            timestamp: req.body.timestamp
        });
    }
    catch(e){
        console.log(e)
        throw new Error(e)
    }

    return res.status(200)

});
export default router;