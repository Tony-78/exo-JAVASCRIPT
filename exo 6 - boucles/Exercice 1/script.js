for (year = 2020; year <= 2030 ; year++) {
    let leapYear = document.createElement("p");
    leapYear.textContent = year ;
    document.body.append(leapYear);
    if ((year % 4 == 0 && year % 100 != 0) || (year % 400 == 0)){
        leapYear.style.color ="red";
    }
}

// A l'aide d'une boucle, afficher toutes les années entre 2020 et 2030. Colorer en rouge toutes les années bissextiles.

// Etre divisible par 4 mais pas divisible par 100
// Etre divisible par 400