import {Friends} from "../config/schema.js";

export const createFriends = async (user_1, user_2) => {
    const friends = await Friends.findOne({ user_1, user_2 }).exec();

    if (friends) {
        return null;
    }

    const newFriends = await new Friends({ user_1, user_2 });

    await newFriends.save();

    return newFriends;

}

export const deleteFriends = async (id) => {
    await Friends.findByIdAndDelete(id)
}

export const getFriends = async (user_id) => {
    //since friends are bidirectional, we need to check both directions
    return await Friends.find({
                                  $or: [{user_1: user_id}, {user_2: user_id}]
    }).exec();
}