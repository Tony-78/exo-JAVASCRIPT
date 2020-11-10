let text = document.getElementById("text");
let boldButton = document.getElementById("boldButton");
let colorButton = document.getElementById("colorButton");
let sizeButton = document.getElementById("sizeButton");

boldButton.addEventListener('click', changeToBold);
colorButton.addEventListener('click', changeColor);
sizeButton.addEventListener('click', changeSize);

function changeToBold () {
    text.classList.toggle('bold');
}

function changeColor () {
    text.classList.toggle('color');
}

function changeSize () {
    text.classList.toggle('size');
}

