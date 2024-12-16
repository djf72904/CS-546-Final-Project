// This file is responsible for handling all the data validation for the tests database functions
import { validate as uuidValidate } from 'uuid';
import {Test, User} from "../db/config/schema.js";

export const createTestValidator = async (data) => {

    if (!data.user_id || !data.options || !data.missed_words || !data.type || !data.layout || !data.song) {
        throw "createTest Error: Must provide all fields";
    }

    //check wpm
    if (typeof data.wpm !== 'number' || data.wpm < 0)
        throw "createTest Error: wpm must be of type Number";
    
    //check options
    if (typeof data.options !== 'object' || Array.isArray(data.options)) 
        throw "createTest Error: options must be of type Object";

    //check missed words
    if (!Array.isArray(data.missed_words)) throw "createTest Error: missed_words must be an array of strings"; 
    for (let word of data.missed_words) { 
        if (typeof word !== 'string') 
            throw "createTest Error: each item in missed_words must be of type String"; 
        } 

    // check level_reached 
    if (typeof data.level_reached !== 'number') throw "createTest Error: level_reached must be of type Number"; 
    
    // check type 
    if (typeof data.type !== 'string') throw "createTest Error: type must be of type String"; 
    
    // check content 
    if (typeof data.content !== 'string') throw "createTest Error: content must be of type String";
    
    // check time 
    if (data.time && typeof data.time !== 'number') throw "createTest Error: time must be of type Number";

    //check layout
    if(typeof data.layout !== "string" || data.layout.trim().length === 0) {
       throw "createTest Error: layout not supplied"
    }
    //check songs
    if(typeof data.song!=="object" || Array.isArray(data.song)){
        throw "createTest Error: song must be of type Object";
    }

    //check accuracy
    if(typeof data.accuracy !== "number" || data.accuracy < 0){
        throw "createTest Error: accuracy must be of type Number";
    }
}

export const getTestsValidator = async (id) => {
    if(! (typeof id === 'string')) throw "getTests Error: id must be of type String"
    if(!uuidValidate(id)) throw "getTests Error: id must be valid uuid"

    const test = await Test.findOne({_id: id});
    if(!test) throw "getTests Error: No test found with given id"

}
export const getAllTestsByUserValidator = async (id) => {
    if(! (typeof id === 'string')) throw "getAllTestsByUser Error: id must be of type String"
    if(!uuidValidate(id)) throw "getAllTestsByUser Error: id must be valid uuid"

    const user = await User.findOne({_id: id});
    if(!user) throw "getAllTestsByUser Error: No User found with given id"

}
