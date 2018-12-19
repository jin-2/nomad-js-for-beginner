var timerHtml = document.querySelector('.timer');

function setTime() {
    const now = new Date();
    const currentHours = now.getHours();
    const currentMinutes = now.getMinutes();
    const currentSeconds = now.getSeconds();
    timerHtml.innerHTML = `${currentHours < 10 ? `0${currentHours}` : currentHours}:${currentMinutes < 10 ? `0${currentMinutes}` : currentMinutes}:${currentSeconds < 10 ? `0${currentSeconds}` : currentSeconds}`;
}

function init() {
    setTime();
    setInterval(setTime, 1000);
}

init();