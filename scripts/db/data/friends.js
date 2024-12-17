import {Friend} from "../config/schema.js";
import { v4 as uuidv4 } from 'uuid';

export const createFriends = async (user_1, user_2) => {
    const friends = await Friend.findOne({ user_1, user_2 }).exec();

    if (friends) {
        return null;
    }

    const newFriends = await new Friend({ user_1, user_2, _id: uuidv4().toString() });

    await newFriends.save();

    return newFriends;

}

export const deleteFriends = async (id) => {
    await Friend.findByIdAndDelete(id)
}

export const getFriends = async (user_id) => {
    //since friends are bidirectional, we need to check both directions
    return await Friend.find({
                                  $or: [{user_1: user_id}, {user_2: user_id}]
    }).exec();
}