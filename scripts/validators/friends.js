// This file is responsible for handling all the data validation for the friends database functions
import { validate as uuidValidate } from 'uuid';
import {User} from "../db/config/schema.js";

export const createFriendsValidator = async (user_1, user_2) => {
    if(!user_1 || !user_2) throw "createFriends Error: must provide user_1 and user_2"

    if(! (typeof user_1 === 'string')) throw "createFriends Error: user_1 must be of type String"
    if(! (typeof user_2 === 'string')) throw "createFriends Error: user_2 must be of type String"

    if(!uuidValidate(user_1)) throw "createFriends Error: user_1 must be valid uuid"
    if(!uuidValidate(user_2)) throw "createFriends Error: user_2 must be valid uuid"

    const user1 = await User.findOne({_id: user_1});
    if(!user1) throw "createFriends Error: No User found with given user_1"

    const user2 = await User.findOne({_id: user_2});
    if(!user2) throw "createFriends Error: No User found with given user_2"
 
}
export const deleteFriendsValidator = async (user_1, user_2) => {
    if(!user_1 || !user_2) throw "deleteFriends Error: must provide user_1 and user_2"

    if(! (typeof user_1 === 'string')) throw "deleteFriends Error: user_1 must be of type String"
    if(! (typeof user_2 === 'string')) throw "deleteFriends Error: user_2 must be of type String"

    if(!uuidValidate(user_1)) throw "deleteFriends Error: user_1 must be valid uuid"
    if(!uuidValidate(user_2)) throw "deleteFriends Error: user_2 must be valid uuid"

    const user1 = await User.findOne({_id: user_1});
    if(!user1) throw "deleteFriends Error: No User found with given user_1"

    const user2 = await User.findOne({_id: user_2});
    if(!user2) throw "deleteFriends Error: No User found with given user_2"

}