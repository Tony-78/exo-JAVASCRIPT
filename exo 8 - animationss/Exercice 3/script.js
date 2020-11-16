// let p = document.querySelectorAll('p');

// window.addEventListener("scroll", test);

// function test() {
// 	p.forEach(test2 => {
// 			if (window.scrollTop > 500) {
// 				test2.style.visibility = "visible";
// 			}
// 	})}






	let paragraphs = document.querySelectorAll("p");

	let p1 = document.getElementById("p1")
	let p2 = document.getElementById("p2")
	let p3 = document.getElementById("p3")
	let p4 = document.getElementById("p4")
	let p5 = document.getElementById("p5")
	let p6 = document.getElementById("p6")
	let p7 = document.getElementById("p7")
	let p8 = document.getElementById("p8")
	let p9 = document.getElementById("p9")
	let p10 = document.getElementById("p10")
	let p11 = document.getElementById("p11")
	let p12 = document.getElementById("p12")
	
	window.addEventListener("scroll", function () {
		if(window.scrollY > 50){
			p1.style.visibility = "visible";
		}
		if(window.scrollY > 100){
			p2.style.visibility = "visible";
		}
		if(window.scrollY > 150){
			p3.style.visibility = "visible";
		}
		if(window.scrollY > 200){
			p4.style.visibility = "visible";
		}
		if(window.scrollY > 250){
			p5.style.visibility = "visible";
		}
		if(window.scrollY > 300){
			p6.style.visibility = "visible";
		}
		if(window.scrollY > 400){
			p7.style.visibility = "visible";
		}
		if(window.scrollY > 700){
			p8.style.visibility = "visible";
		}
		if(window.scrollY > 1000){
			p9.style.visibility = "visible";
		}
		if(window.scrollY > 1200){
			p10.style.visibility = "visible";
		}
		if(window.scrollY > 1400){
			p11.style.visibility = "visible";
		}
		if(window.scrollY > 1600){
			p12.style.visibility = "visible";
		}
	});





// Dans le fichier html fourni, au scroll afficher les différents paragraphes.