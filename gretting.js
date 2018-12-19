const form = document.querySelector('.form');
const grettings = document.querySelector('.greetings');
const input = form.querySelector('input');

const SHOWING_CN = 'showing';
const USERNAME_LS = 'userName';

function saveName(name) {
    localStorage.setItem(USERNAME_LS, name);
}

function handleSubmit(event) {
    event.preventDefault();
    const nameValue = input.value;
    saveName(nameValue);
    printGretting(nameValue);
}

function askForName() {
    form.classList.add(SHOWING_CN);
    form.addEventListener('submit', handleSubmit);
}

function printGretting(name) {
    form.classList.remove(SHOWING_CN);
    grettings.classList.add(SHOWING_CN);
    grettings.innerHTML = `Hello ${name}`;
}

function loadName() {
    const currentUser = localStorage.getItem(USERNAME_LS);
    console.log(currentUser);
    if (currentUser === null) {
        askForName();
    } else {
        printGretting(currentUser);
    }
}

function init() {
    loadName();
}

init();