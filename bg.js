const bodyEl = document.querySelector('body');
const IMG_LENGTH = '5';

function setBgImg(fileName) {
    const image = new Image();
    image.src = `./images/${fileName + 1}.jpg`;
    image.classList.add('bg-image');
    bodyEl.appendChild(image);
}

function randomNumber() {
    const number = Math.floor(Math.random() * IMG_LENGTH);
    return number;
}

function init() {
    const imageName = randomNumber();
    setBgImg(imageName);
}

init();