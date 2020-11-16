const links = document.querySelectorAll("a");
 
links.forEach(test => {
  test.addEventListener("click", clickHandler);
})

function clickHandler(e) {
  e.preventDefault();
  const href = this.getAttribute("href");
  const offsetTop = document.querySelector(href).offsetTop;
 
  scroll({
    top: offsetTop,
    behavior: "smooth"
  });
}



// var fables = document.querySelectorAll('a');

// fables.forEach(fable => {
//     fable.addEventListener('click', function (e) {
//         e.preventDefault();
//         document.querySelector(fable.getAttribute('href')).scrollIntoView({
//             behavior: 'smooth'
//         });
//     });
// });

// Dans le fichier html fourni, la navbar permet de naviguer au sein de la page. Animer la navigation.