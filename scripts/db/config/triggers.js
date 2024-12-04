//This function is responsible for triggering actions based upon a specific database event

import {Profile} from "./schema.js";

export const createProfileFromUser = async (user_id, display_name) => {
    const entry = await new Profile({ _id: user_id, display_name }, { _id: false});
    await entry.save();
}

//TODO: When a test is completed, update the stats for the user
export const updateOverallProfileStats = async (user_id, stats) => {}

