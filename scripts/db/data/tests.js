// This file is responsible for handling all the database interactions for tests

import { Test } from "../config/schema.js"

export const createTest = async (profile_id, stats) => {

    stats.user_id = profile_id;
    const newTest = new Test(stats)

    await newTest.save()

    console.log(newTest)

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
