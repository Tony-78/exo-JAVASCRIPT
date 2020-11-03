// let number = 11;
// if (number > 21) {
//     alert("Votre nombre est supérieur à 21");
// } 


// let age = prompt("Quel âge avez-vous?");
// if (age >= 18) {
//     alert("Vous êtes majeur.");
// } else {
//     alert("Vous êtes mineur.");
// }


// let number = prompt("Donnez un nombre :");
// if (number%2 == 0) {
//     alert("Le nombre est pair.")
// } else {
//     alert("Le nombre est impair.")
// }


let mark = prompt("Donnez une note :");
if (mark <= 3) {
    alert("Nul");
} else {
    if (mark > 3 && mark < 6) {
        alert("Moyen");
    } else {
        if (mark >= 6 && mark < 8) {
            alert("Assez bien");
        } else {
            if (mark >= 8 && mark < 10) {
                alert("Bien");
            } else {
                if (mark == 10) {
                    alert("Excellent");
                } else  {
                    if (mark > 10) {
                        alert("La note est sur 10.")
                    } else {
                        alert("Erreur, veuillez indiquer une note entre 0 et 10 et non des caractères.")
                    }
                }
            }
        }
    }
}

// isNaN permet de déterminer si une valeur n'est pas un nombre.



// let day = 4;
// switch (day) {
//     case 1:
//         alert("Lundi");
//         break;
//     case 2:
//         alert("Mardi");
//         break;
//     case 3:
//         alert("Mercredi");
//         break;
//     case 4:
//         alert("Jeudi");
//         break;
//     case 5:
//         alert("Vendredi");
//         break;
//     case 6:
//         alert("Samedi");
//         break;
//     case 7:
//         alert("Dimanche");
//         break;
//     default:
//         alert("erreur");
// }