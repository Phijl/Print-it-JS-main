const slides = [
	{
		"image": "slide1.jpg",
		"tagLine": "<p>Impressions tous formats <span>en boutique et en ligne</span></p>"
	},
	{
		"image": "slide2.jpg",
		"tagLine": "<p>Tirages haute définition grand format <span>pour vos bureaux et events</span></p>"
	},
	{
		"image": "slide3.jpg",
		"tagLine": "<p>Grand choix de couleurs <span>de CMJN aux pantones</span></p>"
	},
	{
		"image": "slide4.png",
		"tagLine": "<p>Autocollants <span>avec découpe laser sur mesure</span></p>"
	}
];

let numero = 0;
const arrow_left = document.getElementById("banner_arrow_left");
const arrow_right = document.getElementById("banner_arrow_right");
arrow_left.addEventListener("click",function(){
	ChangeSlide(-1);
	updateBulletPoints();
console.log()});
arrow_right.addEventListener("click",function(){
	ChangeSlide(1);
	updateBulletPoints();
});
function ChangeSlide(sens) {
	numero = numero + sens;
	if (numero > 3)
		numero = 0;
	if (numero < 0)
		numero = 3;
	console.log(numero)
	document.getElementById("slide").src = "assets/images/slideshow/" + slides[numero].image;
	document.getElementById("tagline").innerHTML = slides[numero].tagLine;
}

setInterval(function() {
	ChangeSlide(1);
	updateBulletPoints();
}, 8000);

function updateBulletPoints() {
    const bulletPointsContainer = document.getElementById("bullet-points");

    // Effacer les bullet points existants
    bulletPointsContainer.innerHTML = '';

    // Ajouter les nouveaux bullet points
    for (let i = 0; i < slides.length; i++) {
        const bulletPoint = document.createElement("li");
		if (i === numero) {
            bulletPoint.classList.add("current-slide");
        }  

        bulletPointsContainer.appendChild(bulletPoint);
    }
}


// Appelez cette fonction au chargement initial
updateBulletPoints();
