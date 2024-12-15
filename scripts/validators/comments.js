//This file is responsible for handling all the database interactions for comments

import { validate as uuidValidate } from 'uuid';
import { Post } from '../db/config/schema.js';

export const createCommentValidator = async (data) => {
    // CHECK: fields match schema
    if(!(data._id) || !(data.user_id) ||  !(data.timestamp) || !(data.post_id) || !(data.content))
        throw "createComment Error: Must provide all fields"

    // CHECK: _id is valid
    if(! (typeof data._id === 'string') || data._id.trim().length === 0) 
        throw "createComment Error: _id must be of nonempty type string that does not consist of only spaces";
    if (!uuidValidate(data._id)) 
        throw 'createComment Error: _id must be a valid UUID';

    // CHECK: user_id is valid
    if (typeof data.user_id !== 'string' || data.user_id.trim().length === 0) 
        throw 'createComment Error: user_id must be a non-empty string that does not consist of only spaces';
    if (!uuidValidate(user_id))
        throw 'createComment Error: user_id must be a valid UUID';
    const user = await User.findOne({_id: data.user_id});
    if(!user) 
        throw "createComment Error: No User found with given user_id"

    // CHECK: post_id is valid
    if(! (typeof data.post_id === 'string') || data.user_id.trim().length === 0) 
        throw "createComment Error: post_id must be of nonempty type string that does not consist of only spaces";
    if (!uuidValidate(post_id))
        throw 'createComment Error: post_id must be a valid UUID';
    const post = await Post.findOne({_id: data.post_id});
    if(!post) 
        throw "createComment Error: No post found with given post_id";

    // CHECK: content is valid
    if(!(typeof data.content === 'string')) 
        throw "createComment Error: content must be of type string";
    let content = data.content.trim();
    if (content.length === 0)
      throw 'createComment Error: Content cannot be an empty string or string with just spaces';

    return data;
}

export const getCommentsValidator = async (comment_id) => {
    // CHECK: comment_id is valid
    if (!comment_id) 
        throw 'getComments Error: comment_id is required';
    if (typeof comment_id !== 'string') 
        throw 'getComments Error: comment_id must be a string';
    if (!uuidValidate(comment_id))
        throw 'getComments Error: comment_id must be a valid UUID';

    const comment = await Comment.findOne({_id: comment_id});
    if(!comment) 
        throw "getComment Error: No comment found with given comment_id"

    return comment_id;
}

export const getAllCommentsForPostValidator = async (post_id) => {
    // CHECK: post_id is valid
    if (!post_id)
        throw 'getAllCommentsForPost Error: post_id is required';
    if (typeof post_id !== 'string') 
        throw 'getAllCommentsForPost Error: post_id must be a string';
    if (!uuidValidate(post_id))
        throw 'getAllCommentsForPost Error: post_id must be a valid UUID';

    const post = await Post.findOne({_id: post_id});
    if(!post) throw "getAllCommentsForPost Error: No post found with given post_id"

    return post_id;
}

/*import { validate as uuidValidate } from 'uuid';
import {User, Post, Comment} from "../db/config/schema.js";

export const createCommentValidator = async (data) => {
    if(!(data.user_id) || !(data.timestamp) || !(data.post_id) || !(data.content))
        throw "createComment Error: Must provide all fields" 

    //check user_id
    if(! (typeof data.user_id === 'string')) throw "createComment Error: user_id must be of type String"
    if(!uuidValidate(data.user_id)) throw "createComment Error: user_id must be valid uuid"

    const user = await User.findOne({_id: data.user_id});
    if(!user) throw "createComment Error: No User found with given user_id"


    //check post_id
    if(! (typeof data.post_id === 'string')) throw "createComment Error: post_id must be of type String"
    if(!uuidValidate(data.post_id)) throw "createComment Error: post_id must be valid uuid"
    const post = await Post.findOne({_id: data.test_id});
    if(!post) throw "createComment Error: No post found with given post_id"

    //check content
    if(!(typeof data.content === 'string')) throw "createPost Error: content must be of type string"
    let content = data.content.trim();
    if (content.length === 0)
      throw `createPost Error: content cannot be an empty string or string with just spaces`;
    if (!isNaN(content))
      throw `createPost Error: ${content} is not a valid value for content as it only contains digits`;


}

export const getCommentsValidator = async (comment_id) => {
    if(!comment_id) throw "getComments Error: Must provide comment_id"
    if(! (typeof comment_id === 'string')) throw "getComment Error: comment_id must be of type String"
    if(!uuidValidate(comment_id)) throw "getComment Error: comment_id must be valid uuid"
    const comment = await Comment.findOne({_id: comment_id});
    if(!comment) throw "getComment Error: No comment found with given comment_id"

}

export const getAllCommentsForPostValidator = async (post_id) => {
    if (!post_id) throw  "getAllCommentsForPost Error: Must provide post_id"
    if(! (typeof post_id === 'string')) throw "getAllCommentsForPost Error: post_id must be of type String"
    if(!uuidValidate(post_id)) throw "getAllCommentsForPost Error: post_id must be valid uuid"
    const post = await Post.findOne({_id: test_id});
    if(!post) throw "getAllCommentsForPost Error: No post found with given post_id"

} */
