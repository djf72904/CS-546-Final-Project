
function handleTyping(event) {

    document.getElementById('space-reminder').classList.add('hidden');

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
    const mapping = mapKeyboard(currentLayout, kbdkey);
    kbdkey = mapping[0];


    if(kbdkey.includes('shift')) {
        kbdkey = kbdkey.split('shift ')[1];
    }

    if (kbdkey.trim() === expectedChar.trim()) {
        currentChar.style.color = 'black';
        currentChar.classList.remove('active');
        currentChar.classList.add('correct');

        if(currentIndex === spanLength-1){
            endTime = Date.now();
            const timeTaken = endTime - startTime;
            wpm = Math.round(wordProgress / (timeTaken / 1000));
            currentIndex = wordLength;
            endTest('Word Length', (timeTaken / 1000).toFixed(2), wordProgress, missedWords);
        }

        if(event.which === 32 && currentIndex !== spanLength-1) {
            wordProgress++;
            wpm = Math.round(wordProgress / (time / 60));
            document.getElementById('wordProg').textContent = `${wordProgress}/${wordLength}`;
        }

        if (currentIndex < sequence.length) {
            sequence[currentIndex].classList.add('active');
        }

        currentIndex++;

    } else {
        currentChar.style.color = 'red';
        missedWords.push(currentChar.textContent);
        currentChar.classList.add('error');
    }
}


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