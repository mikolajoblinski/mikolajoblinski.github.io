//pobranie elementu po id - tylko jeden element
//parametr w getElementById bez #
var parFirst = document.getElementById("parFirst");
//console.log(parFirst);

//pobranie elementów po klasie - kolekcja elementow
var elementlink = document.getElementsByClassName ("link");
//console.log(elementlink);


//pobranie elementów po tagu
var elementTag = document.getElementsByTagName("p");
//console.log(elementTag);

//pobranie wszystkich elementów po selektorze .superLink - tutaj jest niezbędne podanie selektora klasy (.), jesli pobieramy klasy lub id (#), jeśli pobieramy po id
var elementSuperLink = document.querySelectorAll(".superLink");
//console.log ( elementSuperLink );

//pobranie pojedynczego elementu po selektorze id
//var parSecond = document.querySelector("#parSecond");
//console.log(parSecond);

var mojeLinki = document.querySelectorAll(".link");/*czyli tu mamy zamienione z "getElementsByClassName" na "document.querySelectorAll()"*/
//console.log(mojeLinki[1]);
//
//for ( var i=0; i<mojeLinki.length; i++) {
//    console.log("to moj link nr " + (i + 1) );
//    console.log (mojeLinki[i]);
//    console.log("-------------");
//}

//petla forEach działa na kolekcji pobranej za pomocą metody document.querySelectorAll();
mojeLinki.forEach(function(element, index) {
                  console.log( element );
                  });

