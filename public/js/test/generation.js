
/**
 * Converts a string sequence into individual character elements wrapped in span tags
 * and appends them to the paragraph element with an id of 'seq_container'.
 *
 * @param {string} sequence - The string sequence to be converted into character elements.
 * @return {void} Does not return a value.
 */
function convertParagraphToCharacters(sequence) {
    const paragraph = document.getElementById('seq_container');
    paragraph.innerHTML = ''; // Clear existing content

    Array.from(sequence).forEach(char => {
        const span = document.createElement('span');
        span.classList.add('text-3xl', 'leading-loose', 'tracking-loose', 'character', 'opacity-50');
        span.textContent = char;
        paragraph.appendChild(span);
    });
}

function hasConsecutiveLetters(word) {
    if (!word || typeof word !== 'string') {
        throw new Error('Input must be a valid string');
    }

    word = word.toLowerCase();
    // Iterate through the string to find consecutive repeating letters
    for (let i = 0; i < word.length - 1; i++) {
        if (word[i] === word[i + 1]) {
            return true;
        }
    }

    return false;
}



/**
 * Generates a sequence of random words with options to add punctuation, capitalize, and append numbers.
 * The function uses an external list, `wordList`, as the source for random words.
 * Additional effects, like punctuation, capitalization, and numbers, are conditionally applied.
 *
 * @param {number} wordCount - The number of random words to generate.
 * @param revert
 * @return {string} A string representing the generated sequence of random words.
 */
function generateRandomWords(wordCount, revert=false) {

    const url = new URL(window.location.href);
    const params = new URLSearchParams(url.search);

    const setting = params.get('t')


    let wl = wordList;




    if(setting === '1'){
       wl = wordList.filter(w => w.length < 5)
    }
    if(setting === '2'){
        wl = wordList.filter(w => w.length < 6)

    }
    if(setting === '3'){
        wl = wordList.filter(w=> {
            return hasConsecutiveLetters(w);
        })
    }

    const randomWords = [];
    for (let i = 0; i < wordCount; i++) {
        const randomIndex = Math.floor(Math.random() * wl.length);
        randomWords.push(wl[randomIndex]);
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

/**
 * Sets the word length and updates the UI by highlighting the corresponding length option and resetting the word progress.
 * It also generates a sequence of random words of the specified length and converts it into characters.
 *
 * @param {number} length - The length of words to be set, which can be 10, 25, 50, or 100.
 * @return {void} Does not return a value.
 */
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
