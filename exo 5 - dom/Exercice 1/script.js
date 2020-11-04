let button = document.getElementById("button");
button.addEventListener('click', function (e) {
    e.preventDefault();
    let password1 = document.getElementById("password1");
    let password2 = document.getElementById("password2");
    if (password1.value == password2.value) {
        password1.style.borderColor = "green";
        password2.style.borderColor = "green";
    } else {
        document.getElementById("password1").style.borderColor = "red";
        document.getElementById("password2").style.borderColor = "red";
    }
});

