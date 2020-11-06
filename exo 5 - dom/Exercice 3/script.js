// .test ou .match, c'est la même

const name = document.getElementById("name");
const mail = document.getElementById("email");
const age = document.getElementById("age");
const errorName = document.getElementById("errorName");
const errorMail = document.getElementById("errorMail");
const errorAge = document.getElementById("errorAge");


// Nous définissons nos regex
const regexName = /^[a-zA-Z-'\sáàâäãåçéèêëíìîïñóòôöõúùûüýÿæœÁÀÂÄÃÅÇÉÈÊËÍÌÎÏÑÓÒÔÖÕÚÙÛÜÝŸÆŒ]+$/;
const regexMail = /^[a-z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$/;
const regexAge = /^([0-1][0,2]\d{1}$|\d{0,2})$/;


name.onblur = function() {
    if (regexName.test(name.value) == false) {
        errorName.textContent = "Veuillez respecter le bon format. Ex : Dupont";
    } else {
        errorName.textContent = "";
    }
}

mail.onblur = function() {
    if (regexMail.test(mail.value) == false) {
        errorMail.textContent = "Veuillez respecter le bon format. Ex : exemple@mail.fr";
    } else {
        errorMail.textContent = "";
    }
}

age.onblur = function() {
    if (regexAge.test(age.value) == false) {
        errorAge.textContent = "Erreur";
    } else {
        errorAge.textContent = "";
    }
}
