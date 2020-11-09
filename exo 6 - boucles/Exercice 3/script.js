let languages = ['html', 'css', 'javascript', 'php', 'mysql', 'c++','ruby','python'];
for (i = 0 ; i < languages.length ; i++) {
    let text = document.createElement("p");
    text.textContent = languages[i] ;
    document.body.append(text);
}

// Dans le fichier html fourni, afficher tous les éléments du tableau languages.