//pętla for
//
//for( var i = 1; i <= 10; i++ ) {
//	console.log("Iteracja nr");
//}
//
var tablica = ["volvo", "Mazda", "Honda", "Audi"];
//for( var i= 0; i < tablica.length; i++) {
//	console.log(tablica[i]);
//}


//pętla forEach
//
//tablica.forEach( function( element, index ){
//	console.log("Index: " + index + "Element: " + element);
//} );

//var iter = 1;
//while(iter <= 25) {
//	console.log( "while iteracja nr " + iter);
//	iter++;
//}
//var iter = 1;
//do {
//	console.log("while iteracja nr " + iter);
//	tu mam nie dokończony kod
//} while();


//brake i continue
for( var i = 1; i < 15; i++ ) {
if( i > 6 ) {
	break;
} else {
	console.log("obrót petli nr " + i);
}
}

for(var i=1; i<15; i++) {
	if( i == 4 || i == 6 || i == 10) {
		continue;
	} else {
		console.log( "iteracja nr " + i );
	}
}
