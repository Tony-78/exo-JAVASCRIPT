let form = document.getElementById("form");
let button = document.getElementById("button");

button.addEventListener('click', function() {
    let cln = form.cloneNode(true);
    document.body.appendChild(cln);
});