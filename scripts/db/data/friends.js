import {Friends} from "../config/schema.js";

export const createFriends = async (user_1, user_2) => {

    const friends = await Friends.findOne({ user_1, user_2 }).exec();

    if (friends) {
        return friends;
    }

    const newFriends = new Friends({ user_1, user_2 });

    await newFriends.save();

    return newFriends;

}

export const deleteFriends = async (user_1, user_2) => {

    const friends = await Friends.findOne({ user_1, user_2 }).exec();

    if (!friends) {
        return;
    }

    await friends.remove();

}

export const getFriends = async (user_id) => {
    //since freinds are bidirectional, we need to check both directions
    //use $or: [{ user_1: user_id }, { user_2: user_id }]
}