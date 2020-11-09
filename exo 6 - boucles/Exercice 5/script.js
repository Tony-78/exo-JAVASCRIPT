let firstNumber = 3 ;
let secondNumber = 2 ;
while ((firstNumber * secondNumber) < 250) {
    let result = firstNumber * secondNumber;
    secondNumber = result;
    let content = document.createElement("p");
    content.textContent = result ;
    document.body.append(content);
}


// Créer deux variables firstNumber et secondNumber. Leur donner une valeur comprise entre 1 et 10. Tant que le résultat de la multiplication des deux nombres est inférieur à 250:
// Afficher le résultat.
// Assigner le résultat à secondNumber