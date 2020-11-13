const surname = document.getElementById("surname");
const name = document.getElementById("name");
const errorName = document.getElementById("errorName");
const errorSurname = document.getElementById("errorSurname");

const regex = /^[a-zA-Z-'\sáàâäãåçéèêëíìîïñóòôöõúùûüýÿæœÁÀÂÄÃÅÇÉÈÊËÍÌÎÏÑÓÒÔÖÕÚÙÛÜÝŸÆŒ]+$/;

name.onblur = function() {
    if (regex.test(name.value) == false) {
        errorName.textContent = "Veuillez respecter le bon format. Ex : Jean";
    } else {
        errorName.textContent = "";
    }
}

surname.onblur = function() {
    if (regex.test(surname.value) == false) {
        errorSurname.textContent = "Veuillez respecter le bon format. Ex : Dupont";
    } else {
        errorSurname.textContent = "";
    }
}

new Cleave('#phone', {
    delimiters: [' ', ' ', ' ', ' '],
    blocks: [2, 2, 2, 2, 2]
});

new Cleave('#date', {
    date: true,
    delimiter: '/',
    datePattern: ['d', 'm', 'Y']
});

new Cleave('#creditcard', {
    creditCard: true,
    delimiter: "-",
});