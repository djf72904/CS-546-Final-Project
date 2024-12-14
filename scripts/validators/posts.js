// This file is responsible for handling all the data validation for the posts database functions
import { validate as uuidValidate } from 'uuid';
import {Test, User} from "../db/config/schema.js";

export const createPostValidator = async (data) => {
    if(!(data.user_id) || !(data.timestamp) || !(data.test_id) || !(data.content))
        throw "createPost Error: Must provide all fields"
    //check user_id
    if(! (typeof data.user_id === 'string')) throw "createPost Error: user_id must be of type String"
    if(!uuidValidate(data.user_id)) throw "createPost Error: user_id must be valid uuid"

    const user = await User.findOne({_id: data.user_id});
    if(!user) throw "createPost Error: No User found with given user_id"


    //check test_id
    if(! (typeof data.test_id === 'string')) throw "createPost Error: test_id must be of type String"
    if(!uuidValidate(data.test_id)) throw "createPost Error: test_id must be valid uuid"
    const test = await Test.findOne({_id: data.test_id});
    if(!test) throw "createPost Error: No test found with given test_id"

    //check content
    if(!(typeof data.content === 'string')) throw "createPost Error: content must be of type string"
    let content = data.content.trim();
    if (content.length === 0)
      throw `createPost Error: content cannot be an empty string or string with just spaces`;
    if (!isNaN(content))
      throw `createPost Error: ${content} is not a valid value for content as it only contains digits`;

  
}

export const getPostsValidator = (post_id) => {
    if(! (typeof post_id === 'string')) throw "getPosts Error: post_id must be of type String"
    if(!uuidValidate(post_id)) throw "getPosts Error: post_id must be valid uuid"
}

export const getAllPostsByUserValidator = async (user_id) => {
    if(! (typeof user_id === 'string')) throw "getAllPostsByUser Error: user_id must be of type String"
    if(!uuidValidate(user_id)) throw "getAllPostsByUser Error: user_id must be valid uuid"

    const user = await User.findOne({_id: user_id});
    if(!user) throw "getAllPostsByUser Error: No User found with given user_id"

}
