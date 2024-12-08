// This file is responsible for handling all the database interactions for profiles

import {Profile, User} from "../config/schema.js";

export const getProfile = async (user_id) => {
    const user = await User.findOne({_id: user_id});
    const profile = await Profile.findOne({_id: user_id});

    if (!user || !profile) {
        return null;
    }
    return {
        ...user.toObject(),
        ...profile.toObject()
    }
}

//TODO: Add a function to edit the display name of a user
export const editDisplayName = async (user_id, display_name) => {}

//TODO: Add a function to delete a profile entry and its respective user entry
export const deleteProfileAndUser = async (user_id) => {}

export const updateProfileStats = async (user_id, stats) => {

}