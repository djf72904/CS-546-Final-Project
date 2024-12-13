
/**
 * Handles user typing events, updating the UI based on correct or incorrect input,
 * and managing typing speed metrics such as words per minute (WPM).
 *
 * @param {KeyboardEvent} event - The keyboard event triggered by the user input.
 * @return {void} This function does not return a value.
 */

let isWrong = false;
let currentMissedWord = ""


function handleTyping(event) {


    if(event.key === 'Escape'){
        window.location.href = '/test';
    }

    const modifierKeys = ['Control', 'Alt', 'Meta', 'CapsLock', 'Fn', 'NumLock', 'ScrollLock', 'Symbol', 'SymbolLock'];
    if(modifierKeys.includes(event.key)) {
        return
    }

    document.getElementById('space-reminder').classList.add('hidden');
    document.getElementById('testControls').classList.add('pointer-events-none');

    if(startTime === null) {
        startTime = Date.now();
    }


    const sequence = document.querySelectorAll('#seq_container .character');
    if (currentIndex >= sequence.length) {
        return;
    }

    const currentChar = sequence[currentIndex];
    const expectedChar = currentChar.textContent;


    if(currentSetting === 'time' && event.key === currentChar.textContent && currentIndex === 0) {
        startTimer(time);
    }

    const spanLength = document.querySelectorAll('#seq_container .character').length;

    const currentLayout = document.getElementById('layouts').value;

    let kbdkey =  event.key
    //check if key is not modifier

    const mapping = mapKeyboard(currentLayout, kbdkey);
    if(mapping){
        if(event.shiftKey) {
            kbdkey = mapping[1];
        }
        else{
            kbdkey = mapping[0];
        }
    }

    if (kbdkey.trim() === expectedChar.trim()) {
        currentChar.style.color = 'black';
        currentChar.classList.remove('opacity-50');
        currentChar.classList.remove('active');
        currentChar.classList.add('correct');

        if(currentIndex === spanLength-1){
            endTime = Date.now();
            const timeTaken = endTime - startTime;
            wpm = Math.round(wordProgress / (timeTaken / 1000));
            currentIndex = wordLength;
            elapsedTime = (timeTaken / 1000).toFixed(2);
            endTest('Word Length', (timeTaken / 1000).toFixed(2), wordProgress, missedWords.filter(word=>word.length > 0));
        }

        if(event.which === 32 && currentIndex !== spanLength-1) {
            wordProgress++;
            missedWords.push(currentMissedWord);
            currentMissedWord = "";
            console.log(missedWords)
            document.getElementById('wordProg').textContent = `${wordProgress}/${wordLength}`;
        }

        if (currentIndex < sequence.length) {
            sequence[currentIndex].classList.add('active');
        }
        currentIndex++;

    } else {
        if(!event.shiftKey){
            currentChar.style.color = 'red';
            currentMissedWord = currentSequence.split(" ")[wordProgress];
            currentChar.classList.add('error');
        }

    }
}


/**
 * Maps a key press to a corresponding key on the specified keyboard layout.
 *
 * @param {string} keyboard - The name of the keyboard layout to map the key press to (e.g., 'qwerty').
 * @param {string} keyPress - The key that was pressed.
 * @return {string} The corresponding key from the specified keyboard layout, or the original key press if no match is found.
 */
function mapKeyboard(keyboard, keyPress) {

    const lowerKey = keyPress.toLowerCase();

    let position = null;

    for (let row = 1; row <= 5; row++) {
        const currentRow = layouts.qwerty.keys[`row${row}`];


        const index = currentRow.findIndex(key => key.includes(lowerKey));
        position = { row: row, index: index };

        if (index !== -1) {
            break;
        }
    }

    try{
        return (layouts[`${keyboard}`].keys[`row${position.row}`][position.index]);
    }
    catch(error) {
        return keyPress;
    }
}