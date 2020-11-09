let firstNumber = 10 ;
let secondNumber = 2 ;
while ((firstNumber / secondNumber) > 1) {
    let result = firstNumber / secondNumber;
    firstNumber = result;
    let content = document.createElement("p");
    content.textContent = result ;
    document.body.append(content);
}


// Créer deux variables firstNumber et secondNumber. Leur donner une valeur comprise entre 1 et 10. Tant que le résultat de la division des deux nombres est supérieur à 1:
// Afficher le résultat.
// Assigner le résultat à firstNumber
