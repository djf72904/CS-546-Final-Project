import express from "express";
import {createComment} from "../../scripts/db/data/comments.js";
import xss from "xss";

const router = express.Router();

router.post('/', async (req, res) => {

    req.body.content = xss(req.body.content);
    
    let data = {
        timestamp: new Date().getTime(),
        user_id: req.user,
        content: req.body.content
    }

    try{
        await createComment(req.body.post_id, data);
    }catch(e){
        return res.status(400).send("Error: Failed to create comment");
    }




});

export default router;