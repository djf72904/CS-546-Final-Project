// This file is responsible for handling all the database interactions for profiles
import Validators from "../../validators/client.js";
import {Friend, Post, Profile, Test, User} from "../config/schema.js";
import {getAllTestsByUser} from "./tests.js";

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

export const editDisplayName = async (user_id, display_name) => {


    try{

        const profiles = await Profile.find({display_name})

        if(profiles.length){
            throw new Error(e)
        }

        await Validators.profiles.editDisplayNameValidator(user_id, display_name)
        const user = await Profile.findOneAndUpdate(
            { _id: user_id },
            { display_name: display_name },
            { new: true }
        );


        const profile = await Profile.findOne({ _id: user_id });

        return {
            ...user.toObject(),
            ...profile.toObject()
        }
    }
    catch(e){
        throw new Error(e)
    }


}

//TODO: Add a function to delete a profile entry and its respective user entry
export const deleteProfileAndUser = async (user_id) => {
    try{
        await Validators.profiles.deleteProfileAndUserValidator(user_id)

        await Comment.deleteMany({ user_id: user_id });
        await Post.deleteMany({ user_id: user_id });
        await Friend.deleteMany({ $or: [{user_1: user_id}, {user_2: user_id}] });
        await Test.deleteMany({ user_id: user_id });
        await User.deleteOne({ _id: user_id });
        await Profile.deleteOne({ _id: user_id });
    }
    catch{
        throw new Error("Error deleting account")
    }

}

export const updateProfileStats = async (user_id, stats) => {

    const profile = await Profile.findOneAndUpdate(
        { _id: user_id },
        { $set: stats },
        { new: true }
        );

    return profile.toObject();
}

export const getUserByDisplayName = async (username) => {
    return Profile.findOne({display_name: username});
}
