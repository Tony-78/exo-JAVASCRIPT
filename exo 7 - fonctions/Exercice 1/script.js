let button = document.getElementById("calculate");

button.addEventListener('click', onFormClick);

function onFormClick() {
    let firstNumber = document.getElementById("firstNumber").value;
    let secondNumber = document.getElementById("secondNumber").value;
    let result = multiply(firstNumber, secondNumber);
    let contentResult = document.createElement("p");
    contentResult.textContent = result;
    document.body.append(contentResult);
}

function multiply (firstNumber, secondNumber) {
   return firstNumber * secondNumber
}


// let button = document.getElementById("calculate");

// button.addEventListener('click', ()=> {
//     let firstNumber = document.getElementById("firstNumber").value;
//     let secondNumber = document.getElementById("secondNumber").value;
//     let result = multiply(firstNumber,secondNumber);
//     let contentResult = document.createElement("p");
//     contentResult.textContent = result;
//     document.body.append(contentResult);
// });

// function multiply (firstNumber,secondNumber) {
//     return firstNumber * secondNumber
// }





// Écrire une fonction qui prend 2 nombres en paramètres et qui retourne le résultat de leur multiplication.

// Créer un formulaire permettant d'entrer deux nombres. Au clic sur un bouton, lancer votre fonction.




