// This file is responsible for handling all the data validation for the songs database functions
import { validate as uuidValidate } from 'uuid';
//import {Song} from "../db/config/schema.js";


export const getSongValidator = async (id) => {
    if(!(id)) throw "getSong Error: Must provide id"
    
    //check user_id
    if(! (typeof id === 'string')) throw "getSong Error: id must be of type String"
    if(!uuidValidate(id)) throw "getSong Error: id must be valid uuid"

    const song = await Song.findOne({_id: id});
    if(!song) throw "getSong Error: No User found with given user_id"

}