//jesli w json mam {} traktujemy to jako obiekt
//jesli w json mam [] traktujemy to jako tablice

var jsonOsoby = {
    "osoby": [
        {
            imie: "Krystian", 
            nazwisko: "Dziopa", 
            wzrost: 180, 
            oczy: "niebieskie", 
            zainteresowania: [ 
                { nazwa: "podroze" }, 
                { nazwa: "gotowanie" }
            ] 
        },
        {
            imie: "Dominik",
            nazwisko: "Gomuła",
            wzrost: 170,
            oczy: "brązowe",
            zainteresowania: [
                { nazwa: "gotowanie" },
                { nazwa: "języki" }
            ]
        },
        {
            imie: "Claudia",
            nazwisko: "Żelazowska",
            wzrost: 167,
            oczy: "brązowe",
            zainteresowania: [
                { nazwa: "programowanie" },
                { nazwa: "podroze" },
                { nazwa: "języki" }
            ]
            
        }
    ]
}

jsonOsoby.osoby.forEach( function ( element, index ) {
	console.log( "nazywam sie: " + element.imie + " " + element.nazwisko + " i mam " + element.oczy + " oczy");
});

//petla po obiektach

//var obiekt = {
//	imie: "adam",
//	nazwisko: "nowacki",
//	wzrost: 182,
//	oczy:"szare",
//}
//
//for( var property in obiekt ) {
//	console.log( "Nazwa właściwości: " + property + "wartość właściwości: " + obiekt[property] );
//}