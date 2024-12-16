import {Friend} from "../config/schema.js";

export const createFriends = async (user_1, user_2) => {
    const friends = await Friend.findOne({ user_1, user_2 }).exec();

    if (friends) {
        return null;
    }

    const newFriends = await new Friend({ user_1, user_2 });

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