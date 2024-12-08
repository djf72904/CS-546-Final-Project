
puncNode.classList.add('bg-gray-200', 'p-2', 'rounded-full');
puncNode.textContent = 'Punctuation';

capNode.classList.add('bg-gray-200', 'p-2', 'rounded-full');
capNode.textContent = 'Capitalization';

numNode.classList.add('bg-gray-200', 'p-2', 'rounded-full');
numNode.textContent = 'Numbers';

function showDialog() {
    dialog.classList.remove("hidden");
    testTypeEl.textContent = currentSetting === 'wordLength '? 'Word Length' : 'Time';
    timeEl.textContent = time + ' seconds';
    wordsEl.textContent = wordProgress + ' words';
    missedWordsEl.textContent = missedWords.length.toString() + ' words';
    speedEl.textContent = wpm + ' WPM';
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

function endTest(testType, time, words, missedWords) {
    showDialog();
    const wpm = ((words + 1 - missedWords.length )/ time).toFixed(2) * 60
    timeEl.textContent = time + ' seconds';
    wordsEl.textContent = words + 1 + ' words';
    missedWordsEl.textContent = `${100 - ((missedWords.length / words).toFixed(2) * 100)}% • ${missedWords.length} missed`;
    speedEl.textContent =
        `${wpm.toFixed(0)} WPM • Level ${levels.findIndex(level => wpm >= level.lowerBound && wpm < level.upperBound) + 1}`;
    testTypeEl.textContent = testType;
    if(missedWords.length === 0 ){
        const canvas = document.getElementById('confetti-canvas')
        const jsConfetti = new JSConfetti();
        jsConfetti.addConfetti({
                                   confettiNumber: 100,
        });}
}