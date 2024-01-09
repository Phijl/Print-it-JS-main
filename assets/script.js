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

function ChangeSlide(sens) {
	numero = numero + sens;
	if (numero > 3)
		numero = 0;
	if (numero < 0)
		numero = 3;
	document.getElementById("slide").src = "assets/images/slideshow/" + slides[numero].image;
	document.getElementById("tagline").innerHTML = slides[numero].tagLine;
}

setInterval(function() {
	ChangeSlide(1);
}, 8000);