// This file is responsible for handling all the database interactions for profiles
import Validators from "../../validators/client.js";
import {Profile, User} from "../config/schema.js";
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
    Validators.profiles.editDisplayNameValidator(user_id, display_name)
    const user = await User.findOneAndUpdate(
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

//TODO: Add a function to delete a profile entry and its respective user entry
export const deleteProfileAndUser = async (user_id) => {
    Validators.profiles.deleteProfileAndUserValidator(user_id)

    const user = await User.findOneAndDelete(
        { _id: user_id },
    );

    const profile = await Profile.findOneAndDelete({ _id: user_id });

    return {
        user: user.toObject(),
        profile: profile.toObject()
    }
}

export const updateProfileStats = async (user_id, stats) => {

    const {
        best_wpm,
        avg_wpm,
        max_level,
        avg_accuracy,
        common_missed_words
    } = stats


    try{
        const profile = await getProfile(user_id);

        const tests = await getAllTestsByUser(user_id);

        const avgwpm = (tests.reduce((a,b)=>{
            return a + b.wpm
        }, 0) + avg_wpm) / (tests.length + 1)

        const avgaccuracy =( Array.from(tests).reduce((a, b)=>{
            return a + (b.missed_words.length / b.content.split(" ").length)
        }, 0) + avg_accuracy) / Array.from(tests).length + 1


        return Profile.updateOne({_id: user_id}, {
            ...(profile.best_wpm < best_wpm && {best_wpm: best_wpm}),
            ...(profile.max_level < max_level && {max_level: max_level}),
            avg_wpm: avgwpm,
            avg_accuracy: avgaccuracy
        });

    }
    catch(e){
        return "Error Updating Profile Stats"
    }


    return true;


    const profile = await Profile.findOneAndUpdate(
        { _id: user_id },
        { $set: stats },
        { new: true }
        );

    return profile.toObject();
}

export const getUserByDisplayName = async (username) => {
    return await Profile.findOne({display_name: username})
}
