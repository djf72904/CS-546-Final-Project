
/**
 * Starts a countdown timer for a specified duration. Updates the timer display on the page every second.
 * When the timer reaches zero, a dialog is shown.
 *
 * @param {number} duration - The countdown time in seconds for which the timer will run.
 * @return {void} This function does not return a value.
 */
function startTimer(duration) {
    document.getElementById('wordProg').classList.add('hidden')
    let timer = duration;
    const timerElement = document.getElementById('timer');

    timerElement.textContent = `${timer}`;

    const timerInterval = setInterval(() => {
        timer--;
        timerElement.textContent = `${timer}`;

        if (timer <= 0) {
            showDialog(`${100 - ((missedWords.length / wordProgress).toFixed(2) * 100)}% • ${missedWords.length} missed`);
            clearInterval(timerInterval);
        }
    }, 1000);
}

/**
 * Sets the timer duration and updates the UI to reflect the selected time setting.
 *
 * @param {number} duration - The duration to set as the timer value. Expected values are 30, 60, or 120.
 * @return {void} This function does not return a value.
 */
function setTime(duration) {
    const sequence = generateRandomWords(1000);
    convertParagraphToCharacters(sequence);
    time = duration;
    document.getElementById('timer').textContent = `${time}`;

    if(time === 30) {
        document.getElementById('time-30').classList.add('setting__active');
        document.getElementById('time-60').classList.remove('setting__active');
        document.getElementById('time-120').classList.remove('setting__active');
    }
    if(time === 60) {
        document.getElementById('time-30').classList.remove('setting__active');
        document.getElementById('time-60').classList.add('setting__active');
        document.getElementById('time-120').classList.remove('setting__active');
    }
    if(time === 120) {
        document.getElementById('time-30').classList.remove('setting__active');
        document.getElementById('time-60').classList.remove('setting__active');
        document.getElementById('time-120').classList.add('setting__active');
    }
}
