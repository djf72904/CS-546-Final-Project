import express from "express";
import {createPost, getAllPosts} from "../scripts/db/data/posts.js";
import {postsHandler} from "../middleware.js";
import xss from "xss";
let router = express.Router();


router.get('/', postsHandler, async function(req, res, next) {

    const posts = await getAllPosts()


    res.render('feed', {
        posts: posts,
    });
});

router.post('/', postsHandler, async function(req, res, next) {

    req.body.content = xss(req.body.content)

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