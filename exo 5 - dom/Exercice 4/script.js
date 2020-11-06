let logo = document.getElementById("logo");

logo.addEventListener('click', function () {
    if (logo.src.match("logo.png")) {
        logo.src = "logo2.jpg"
    } else {
        logo.src = "logo.png";
    }
});

logo.addEventListener('mouseover', function () {
    logo.style.height ="250px";
    logo.style.width ="250px";
});

logo.addEventListener('mouseout', function () {
    logo.style.height ="150px";
    logo.style.width ="150px";
});
