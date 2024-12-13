//This function is responsible for triggering actions based upon a specific database event

import {Profile} from "./schema.js";
import { getAllTestsByUser } from "../data/tests.js";
import { updateProfileStats } from "../data/profiles.js";

export const createProfileFromUser = async (user_id, display_name) => {
    const entry = await new Profile({ _id: user_id, display_name }, { _id: false});
    await entry.save();
}

//TODO: When a test is completed, update the stats for the user
export const updateOverallProfileStats = async (user_id) => {
    /*
        - get all tests by user
        - loop through all 

        - update best_wpm
        - update avg_wpm 
        - update max-level
        - update avg accuracy
        - find top 5 most missed words
            - do this by going through all missed words and put in object and take top 5
    */

    let testArr = await getAllTestsByUser(user_id);

    let testAmt = testArr.length;

    let totalWpm = 0;
    let totalAccur = 0;

    let maxLevel = 1;
    let maxWpm = 0;

    let totalMissedWords = {};

    for(let i=0; i<testAmt; i++){

        let missedWordsArr = testArr[i].missed_words
        let missedWordsCount = missedWordsArr.length;

        //Add missed words to object
        for(let j=0; j<missedWordsArr.length; j++){
            
            if(Object.keys(totalMissedWords).includes(missedWordsArr[j])){
                totalMissedWords.missedWordsArr[i]++
            }
            else{
                totalMissedWords.missedWordsArr[j] = 1
            }
        }

        totalWpm += testArr[i].wpm;
        totalAccur += ((1 - (missedWordsCount/testArr[i].content.split(" ").length))*100) 

        maxLevel = Math.max(maxLevel, testArr[i].max_level);
        maxWpm = Math.max(maxWpm, testArr[i].wpm)

    }

    let avgWpm = totalWpm/testAmt;
    let avgAccur = totalAccur/testAmt;
    
    let missedWordsPairs = Object.entries(totalMissedWords);

    missedWordsPairs.sort((a, b) => {
        b[1] - a[1]
    })

    let top5MissedWords = []
    for(let i=0; i<missedWordsPairs.length; i++){
        top5MissedWords.push(missedWordsPairs[i])
    }

    newStats = {
        best_wpm: bestWpm,
        avg_wpm: avgWpm,
        max_level: maxLevel,
        avg_accuracy: avgAccur,
        common_missed_words: top5MissedWords
    }

    updateProfileStats(user_id, newStats);

}

