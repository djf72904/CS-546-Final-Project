// This file is responsible for handling all the database interactions for tests

import { Test } from "../config/schema.js"
import { v4 as uuidv4 } from 'uuid';


export const createTest = async (profile_id, stats) => {

    stats.user_id = profile_id;
    stats._id = uuidv4().toString();
    stats.wpm = Math.round(stats.wpm);
    if(stats.type !== "time"){
        stats.time = 0
    }
    const newTest = await new Test(stats)

    await newTest.save()

    return newTest
}


export const getTest = async (id) => {
    
    return Test.findById(id);
}


export const getAllTests = async () => {

    return Test.find({})
}


export const getAllTestsByUser = async (profile_id) => {

    let testArr = await Test.find(
        {
            user_id: {$eq: profile_id}
        }
    )

    return Array.from(testArr)
}
