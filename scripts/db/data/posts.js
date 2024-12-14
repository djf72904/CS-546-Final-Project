//This file is responsible for handling all the database interactions for posts
import {Post} from "../config/schema.js";
import Validators from "../../validators/client.js";
import {getTest} from "./tests.js";
import {getAllCommentsForPost} from "./comments.js";
import {getProfile} from "./profiles.js";
import {timeAgo} from "../../time-ago.js";
import {getSong} from "./songs.js";

export const createPost = async (data) => {
    await Validators.posts.createPostValidator(data)
    data.content.trim();
    const newPost = new Post({data});
    await newPost.save();
    return newPost;
}

export const getPost = async (post_id) => {
    Validators.posts.getPostsValidator(post_id)
    const post = await Post.findOne({_id: post_id});

    if (!post) {
        return null;
    }
    return {
        ...post.toObject(),
    }
}

export const getAllPosts = async (user_id) => {
    const allPosts =  await Post.find({})


    const posts = Array.from(allPosts).map(async r=>{

        const tests = await getTest(r.test_id)
        const comments = await getAllCommentsForPost(r._id)

        const comm = comments.map(async c=>{
            return {
                ...c.toObject(),
                profile: await getProfile(c.user_id),
                timeAgo: timeAgo(c.timestamp),
            }
        })

        return {
            ...r.toObject(),
            timeAgo: timeAgo(r.timestamp),
            profile: await getProfile(user_id),
            comments: await Promise.all(comm),
            test: tests
        }
    })


    return Promise.all(posts)
}

export const getAllPostsByUser = async (user_id) => {
    Validators.posts.getPostsValidator(user_id)
    return (await getAllPosts(user_id)).filter(post => post.user_id === user_id)
}
