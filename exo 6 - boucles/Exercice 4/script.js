let days = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi','Dimanche'];
for ( i = 0 ; i < days.length ; i++) {
    let text = document.createElement("p");
    text.textContent = days[i] ;
    document.body.append(text);
    if ((days[i] == "Samedi" || days[i] == "Dimanche")){
    text.style.fontWeight = "bold";
}
}

// Dans un fichier html fourni, afficher tous les éléments du tableau days. Mettre en gras le samedi et le dimanche.