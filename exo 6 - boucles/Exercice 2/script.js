for (number = 0; number <= 100 ; number++) {
    let multiple = document.createElement("p");
    multiple.textContent = number ;
    document.body.append(multiple);
    if (number % 15 == 0){
        multiple.textContent = "...";
    }
}

// A l'aide d'une boucle afficher tous les nombre de 0 à 100. Pour chaque multiples de 15, les remplacer par '...'