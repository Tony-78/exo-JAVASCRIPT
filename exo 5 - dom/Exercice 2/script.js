let button = document.getElementById("button");
button.addEventListener('click', function (e) {
    e.preventDefault();
    let password1 = document.getElementById("password1");
    let password2 = document.getElementById("password2");
    if (password1.value == password2.value) {
        password1.setAttribute("class", "green");
        password2.setAttribute("class", "green");
    } else {
        document.getElementById("password1").setAttribute("class", "red");
        document.getElementById("password2").setAttribute("class", "red");
    }
});

