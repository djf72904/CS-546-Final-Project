
puncNode.classList.add('bg-gray-200', 'p-2', 'rounded-full');
puncNode.textContent = 'Punctuation';

capNode.classList.add('bg-gray-200', 'p-2', 'rounded-full');
capNode.textContent = 'Capitalization';

numNode.classList.add('bg-gray-200', 'p-2', 'rounded-full');
numNode.textContent = 'Numbers';

/**
 * Displays a dialog with the current test settings and performance metrics.
 *
 * Updates the dialog to show the type of test (Word Length or Time), current time in seconds,
 * words progress, missed words count, and typing speed in words per minute. Additionally,
 * it shows the complexity indicators such as punctuation, capitals, and numbers, if present.
 *
 * @return {void} Does not return a value.
 */
function showDialog(missed) {
    dialog.classList.remove("hidden");
    testTypeEl.textContent = currentSetting === 'wordLength '? 'Word Length' : 'Time';
    timeEl.textContent = time + ' seconds';
    wordsEl.textContent = wordProgress + ' words';
    speedEl.textContent = wpm + ' WPM';
    missedWordsEl.textContent = missed
    if(hasPunctuation) {
        complexityEl.appendChild(puncNode);
    }
    if(hasCapital) {
        complexityEl.appendChild(capNode);
    }
    if(hasNumbers) {
        complexityEl.appendChild(numNode);
    }
    if(!hasPunctuation && !hasCapital && !hasNumbers) {
        complexityEl.textContent = 'N/A';
    }
}

function hideDialog() {
    dialog.classList.add("hidden");
}

/**
 * Ends the test and updates the interface with the results.
 *
 * @param {string} testType - The type or category of test that was undertaken.
 * @param {number} time - The duration of the test in seconds.
 * @param {number} words - The number of words completed during the test.
 * @param {Array<string>} missedWords - An array containing the words that were missed during the test.
 * @return {void} This function does not return a value; it updates the interface with the results of the test.
 */
function endTest(testType, time, words, missedWords) {
    timerGoing = false;
    let locWPM
    if(wordProgress <= 0 || missedWords.length > wordProgress){
        accur = 0
        wpm = 0
        locWPM = 0
    }
    else{
        accur = 100 - ((missedWords.length / wordProgress).toFixed(2) * 100)
        wpm = ((words - missedWords.length )/ time).toFixed(2) * 60
        locWPM = wpm
    }

    showDialog(`${accur}% • ${missedWords.length} missed`);
    timeEl.textContent = time + ' seconds';
    wordsEl.textContent = words + ' words';
    if(wpm < 50){
        currLevel = 1
    }
    else {
        currLevel = levels.findIndex(level => locWPM >= level.lowerBound && locWPM < level.upperBound) + 1
    }

    speedEl.textContent =
        `${locWPM.toFixed(0)} WPM • Level ${currLevel}`;
    testTypeEl.textContent = testType;
    if(missedWords.length === 0 ){
        const jsConfetti = new JSConfetti();
        jsConfetti.addConfetti({
                                   confettiNumber: 100,
        });}
}

async function createTest(words, time, missedWords, songInfo){
    const response = await fetch('/test', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
                                 time: time,
                                 wpm: wpm,
                                 options: {
                                     hasPunctuation,
                                     hasCapital,
                                     hasNumbers,
                                 },
                                 missed_words: missedWords,
                                 type: currentSetting,
                                 accuracy: accur,
                                 level_reached: currLevel,
                                 content: currentSetting === 'time' ? currentSequence.substring(0, currentIndex) : currentSequence,
                                 layout: layout,
                                 song: songInfo
                             })
    })

    const data = await response.json()
    return (data?._id)
}

async function createPost(test_id, content="test"){

    const testinp = document.getElementById('test-inp').value;

    await fetch('/feed', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            timestamp: new Date().getTime(),
            test_id: await test_id,
            content: testinp,
        })
    }).catch(e=>{
        console.log(e)
    })
}