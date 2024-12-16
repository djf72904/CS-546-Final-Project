// This file is responsible for handling all the database interactions for tests

import { Test } from "../config/schema.js"
import { v4 as uuidv4 } from 'uuid';
import {createTestValidator, getAllTestsByUserValidator, getTestsValidator} from "../../validators/tests.js";


export const createTest = async (profile_id, stats) => {
    try{
        stats.user_id = profile_id;
        stats._id = uuidv4().toString();

        await createTestValidator(stats);

        const newTest = await new Test(stats)
        await newTest.save()

        return newTest
    }
    catch(e){
        console.log(e)
        throw new Error('Error creating test')
    }


}


export const getTest = async (id) => {

    await getTestsValidator(id)

    return Test.findById(id);
}


export const getAllTests = async () => {

    return Test.find({})
}


export const getAllTestsByUser = async (profile_id) => {

    await getAllTestsByUserValidator(profile_id)

    let testArr = await Test.find(
        {
            user_id: {$eq: profile_id}
        }
    )

    return Array.from(testArr)
}
