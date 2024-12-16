// This file is responsible for handling all the database interactions for songs
import {Song} from "../config/schema.js";

export const getAllSongs = async () => {}
export const getSong = async (id) => {
    return Song.find({
            _id: id
        })
}