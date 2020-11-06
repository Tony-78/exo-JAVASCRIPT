let name = document.getElementById("name");
let mail = document.getElementById("email");

name.addEventListener('focus', function() {
    name.classList.toggle("color");
});

name.addEventListener('blur', function() {
    name.classList.toggle("color");
});

mail.addEventListener('focus', function() {
    mail.classList.toggle("color");
});

mail.addEventListener('blur', function() {
    mail.classList.toggle("color");
});