//This file is responsible for handling all the data validation for the profiles database functions
import {User, Profile} from "../db/config/schema.js";
import { validate as uuidValidate } from 'uuid';


//TODO: Add a function to edit the display name of a user
export const editDisplayNameValidator = async (user_id, display_name) => {
    if(!user_id || !display_name) 
        throw "editDisplayName Error: must provide user_id and display_name"

        if(! (typeof user_id === 'string')) throw "editDisplayName Error: user_id must be of type String"
        if(!uuidValidate(user_id)) throw "editDisplayName Error: user_id must be valid uuid"
        if (display_name.includes(" "))
            throw new Error('Error: Input display name cannot contain spaces.');
    
    const user = await User.findOne({_id: user_id});
    if(!user) throw "editDisplayName Error: No User found with given user_id"

    if(typeof display_name !== 'string') throw "editDisplayName error: type of display_name must be string"

}

export const updateProfileStatsValidator = async (user_id, stats) => {
    if (!user_id || !stats) { throw "updateProfileStats Error: user_id and stats must be provided"; }

    if(! (typeof user_id === 'string')) throw "updateProfileStats Error: user_id must be of type String"
    if(!uuidValidate(user_id)) throw "updateProfileStats Error: user_id must be valid uuid"
 
    const user = await Profile.findOne({_id: user_id});
    if(!user) throw "updateProfileStats Error: No User found with given user_id"

    if (typeof stats !== 'object' || Array.isArray(stats)) throw "updateProfileStats Error: stats must be of type Object"; 
}

//TODO: Add a function to delete a profile entry and its respective user entry
export const deleteProfileAndUserValidator = async (user_id) => {
    if(!user_id) 
        throw "deleteProfileAndUser Error: must provide user_id"

    if(! (typeof user_id === 'string')) throw "deleteProfileAndUser Error: user_id must be of type String"
    if(!uuidValidate(user_id)) throw "deleteProfileAndUser Error: user_id must be valid uuid"

    const user = await User.findOne({_id: user_id});
    if(!user) throw "deleteProfileAndUser Error: No User found with given user_id"
    
}