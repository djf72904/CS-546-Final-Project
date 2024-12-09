//This file is responsible for handling all the database interactions for posts
import {Post} from "../config/schema.js";
import Validators from "../../validators/client.js";

export const createPost = async (data) => {
    Validators.posts.createPostValidator(data)
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

export const getAllPosts = async () => {
    const posts = await Post.find({})
    return posts.map(post => post.toObject())
}

export const getAllPostsByUser = async (user_id) => {
    Validators.posts.getPostsValidator(user_id)
    const posts = await Post.find({user_id});

    if(!posts){
        return [];
    }

    return posts.map(post =>  post.toObject())
}
