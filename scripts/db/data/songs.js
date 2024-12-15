// This file is responsible for handling all the database interactions for songs
import { songs } from "../../../songs.js"

export const getAllSongs = async () => {
    return songs;
}
export const getSong = async (name) => {
    const allSongs = await getAllSongs();
    return allSongs.find({ name: name });
}