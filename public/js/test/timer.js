
function startTimer(duration) {
    document.getElementById('wordProg').classList.add('hidden')
    let timer = duration;
    const timerElement = document.getElementById('timer');

    timerElement.textContent = `${timer}`;

    const timerInterval = setInterval(() => {
        timer--;
        timerElement.textContent = `${timer}`;

        if (timer <= 0) {
            showDialog();
            clearInterval(timerInterval);
        }
    }, 1000);
}

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
