let languages = ['html', 'css', 'javascript', 'php', 'mysql', 'c++','ruby','python'];


// FOR 

for (nameLanguage = 0 ; nameLanguage < languages.length ; nameLanguage++) {
    let text = document.createElement("p");
    text.textContent = languages[nameLanguage] ;
    document.body.append(text);
}

// Dans le fichier html fourni, afficher tous les éléments du tableau languages.


// FOR EACH

// languages.forEach(element => {
//     let text = document.createElement("p");
//     text.textContent = element;
//     document.body.append(text);
// });