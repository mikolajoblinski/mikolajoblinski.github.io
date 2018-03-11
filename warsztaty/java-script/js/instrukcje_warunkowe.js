//instrukcja if
var zmienna1 = "kot";
var zmienna2 = "pies";

if( zmienna1 != zmienna2) {
	console.log("spełniam warunek");
}

//instrukcja if else
if( zmienna1 == zmienna2 ) {
	console.log("spełniam warunek");
} else {
	console.log("nie spełniam warunku");
}

//instrukcja else if

var mojaLiczba = 65;
 if( mojaLiczba == 5 ) {
	 console.log("moja liczba to 5");
 } else if( mojaLiczba == 12 ) {
	 console.log("moja liczba to 12");
 } else if(mojaLiczba == 65) {
	 console.log("moja liczba to 65");
 }


//konstrukcja switch

var kolor = "zielony";
switch( kolor ) {
	case "czerwony" :
		console.log("kolor czerwony");
	break;
	case "zielony" :
		console.log("kolor zielony");
	break;
	default:
		console.log("nie znalazłem dopasowania koloru");
}