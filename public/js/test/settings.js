
function togglePunctuation() {
    hasPunctuation = !hasPunctuation;
    if(hasPunctuation) {
        const sequence = generateRandomWords(wordLength);
        convertParagraphToCharacters(sequence);

        document.getElementById('punctuation').classList.add('setting__active');
    } else {
        document.getElementById('punctuation').classList.remove('setting__active');
    }
}

function toggleCapital() {
    hasCapital = !hasCapital;
    if(hasCapital) {
        const sequence = generateRandomWords(wordLength);
        convertParagraphToCharacters(sequence);
        document.getElementById('capital').classList.add('setting__active');
    } else {
        document.getElementById('capital').classList.remove('setting__active');
    }
}

function toggleNumbers() {
    hasNumbers = !hasNumbers;
    if(hasNumbers) {
        const sequence = generateRandomWords(wordLength);
        convertParagraphToCharacters(sequence);
        document.getElementById('numbers').classList.add('setting__active');
    } else {
        document.getElementById('numbers').classList.remove('setting__active');
    }
}


function selectSetting(setting) {
    currentSetting = setting;
    document.querySelectorAll('.setting__active').forEach(btn => btn.classList.remove('setting__active'));
    if (setting === 'time') {
        wordLength = 1000;
        setTime(30);
        document.getElementById('timer').style.display = 'block';
        document.getElementById('wordProg').style.display = 'none';
        document.getElementById('time-options').style.display = 'block';
        document.getElementById('word-length-options').style.display = 'none';
        document.getElementById('word-length-btn').classList.remove('setting__active');
        document.getElementById('time-btn').classList.add('setting__active');
    } else if (setting === 'wordLength') {
        document.getElementById('timer').style.display = 'none';
        document.getElementById('wordProg').style.display = 'block';
        document.getElementById('word-length-options').style.display = 'block';
        document.getElementById('time-options').style.display = 'none';
        document.getElementById('word-length-btn').classList.add('setting__active');
        document.getElementById('time-btn').classList.remove('setting__active');
    }
}
