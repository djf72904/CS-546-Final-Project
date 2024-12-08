
function convertParagraphToCharacters(sequence) {
    const paragraph = document.getElementById('seq_container');
    paragraph.innerHTML = ''; // Clear existing content

    Array.from(sequence).forEach(char => {
        const span = document.createElement('span');
        span.classList.add('text-3xl', 'leading-loose', 'tracking-loose', 'character', 'text-gray-400');
        span.textContent = char;
        paragraph.appendChild(span);
    });
}

function generateRandomWords(wordCount) {
    const randomWords = [];
    for (let i = 0; i < wordCount; i++) {
        const randomIndex = Math.floor(Math.random() * wordList.length);
        randomWords.push(wordList[randomIndex]);
    }
    if(hasPunctuation) {
        for(let i = 0; i < randomWords.length; i++) {
            const char = randomWords[i];
            if(Math.random() < 0.2) {
                const punctuation = ['.', ',', ';', '?'];
                //insert punctuation at random index
                const randomIndex = Math.floor(Math.random() * punctuation.length);
                randomWords[i] = char + punctuation[randomIndex];

            }

        }
    }
    if(hasCapital) {
        //make sure it only applies to first letter of word
        for(let i = 0; i < randomWords.length; i++) {
            const char = randomWords[i];
            if(Math.random() < 0.3) {
                randomWords[i] = char[0].toUpperCase() + char.slice(1);
            }
        }
    }
    if(hasNumbers) {
        // make sure it only applies to first letter of word
        for(let i = 0; i < randomWords.length; i++) {
            const char = randomWords[i];
            if(Math.random() < 0.1) {
                randomWords[i] = char + Math.floor(Math.random() * 10);
            }
        }
    }
    currentSequence = randomWords.join(' ');
    return randomWords.join(' ');
}

function setWordLength(length) {
    wordLength = length;
    if(wordLength === 10) {
        document.getElementById('word-ln-10').classList.add('setting__active');
        document.getElementById('word-ln-10').classList.add('setting__active');
        document.getElementById('word-ln-25').classList.remove('setting__active');
        document.getElementById('word-ln-50').classList.remove('setting__active');
        document.getElementById('word-ln-100').classList.remove('setting__active');
    }
    if(wordLength === 25) {
        document.getElementById('word-ln-10').classList.remove('setting__active');
        document.getElementById('word-ln-25').classList.add('setting__active');
        document.getElementById('word-ln-50').classList.remove('setting__active');
        document.getElementById('word-ln-100').classList.remove('setting__active');
    }
    if(wordLength === 50) {
        document.getElementById('word-ln-10').classList.remove('setting__active');
        document.getElementById('word-ln-25').classList.remove('setting__active');
        document.getElementById('word-ln-50').classList.add('setting__active');
        document.getElementById('word-ln-100').classList.remove('setting__active');
    }
    if(wordLength === 100) {
        document.getElementById('word-ln-10').classList.remove('setting__active');
        document.getElementById('word-ln-25').classList.remove('setting__active');
        document.getElementById('word-ln-50').classList.remove('setting__active');
        document.getElementById('word-ln-100').classList.add('setting__active');
    }

    document.getElementById('wordProg').textContent = `0/${wordLength}`;
    const sequence = generateRandomWords(length);
    convertParagraphToCharacters(sequence + ' ');
}
