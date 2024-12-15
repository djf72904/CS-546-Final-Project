//This function is responsible for triggering actions based upon a specific database event

import {Profile} from "./schema.js";
import { getAllTestsByUser } from "../data/tests.js";
import {updateProfileStats} from "../data/profiles.js";

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
                let word = missedWordsArr[j]
                totalMissedWords[word] += 1
            }
            else{
                let word = missedWordsArr[j]
                totalMissedWords[word] = 1
            }
        }

        totalWpm += testArr[i].wpm;
        totalAccur += ((1 - (missedWordsCount/testArr[i].content.split(" ").length))*100) 

        maxLevel = Math.max(maxLevel, testArr[i].level_reached);
        maxWpm = Math.max(maxWpm, testArr[i].wpm)

    }

    let avgWpm = totalWpm/testAmt;
    let avgAccur = totalAccur/testAmt;

    let top5MissedWords = []
    for(let i=0; i<5; i++){
        let max = 0;
        let maxWord = ""
        let missedWordsKeys = Object.keys(totalMissedWords)

        for(let k=0; k<missedWordsKeys.length; k++){
            if(!top5MissedWords.includes(missedWordsKeys[k])){
                let oldMax = max;
                max = Math.max(max, totalMissedWords[missedWordsKeys[k]]);

                if(max !== oldMax){
                    maxWord = missedWordsKeys[k]
                }
            }
        }
        if(max === 0){
            break;
        }else{
            top5MissedWords.push(maxWord)
        }
    }

    let newStats = {
        best_wpm: maxWpm,
        avg_wpm: avgWpm,
        max_level: maxLevel,
        avg_accuracy: avgAccur,
        common_missed_words: top5MissedWords
    }

    await updateProfileStats(user_id, newStats);

}

