let text = document.getElementById("paragraph");
let pink = document.getElementById("pinkButton");
let blue = document.getElementById("blueButton");
let violet = document.getElementById("violetButton");
let bold = document.getElementById("boldButton");
let italic = document.getElementById("italicButton");

pink.addEventListener('click', function () {
    if (text.classList == "blue") {
        text.classList.remove('blue');
    } 

    if (text.classList == "violet") {
        text.classList.remove('violet');
    } 

    text.classList.toggle('pink');

});


blue.addEventListener('click', function () {
    if (text.classList == "pink") {
        text.classList.remove('pink');
    } 

    if (text.classList == "violet") {
        text.classList.remove('violet');
    } 

    text.classList.toggle('blue');

});


violet.addEventListener('click', function () {
    if (text.classList == "blue") {
        text.classList.remove('blue');
    } 

    if (text.classList == "pink") {
        text.classList.remove('pink');
    } 

    text.classList.toggle('violet');

});


bold.addEventListener('click', function () {
    text.classList.toggle("bold");
});


italic.addEventListener('click', function () {
    text.classList.toggle("italic");
});
