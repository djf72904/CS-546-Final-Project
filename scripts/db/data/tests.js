// This file is responsible for handling all the database interactions for tests

import { Test } from "../config/schema.js"

export const createTest = async (profile_id, stats) => {

    stats.user_id = profile_id;
    return Test.insertOne(stats);
}


export const getTest = async (id) => {
    
    return Test.findById(id);
}


export const getAllTests = async () => {

    return Test.find({})
}


export const getAllTestsByUser = async (profile_id) => {

    let testArr = await allTests.find(
        {
            user_id: {$eq: profile_id}
        }
    ).toArray()

    return testArr
}
