//pobieram istniejący węzeł o id output
var istniejacyWezel = document.getElementById ("output");

//sprawdzam czy udało mi sie go pobrać
console.log (istniejacyWezel);

//tworze nowy element
var newElement = document.createElement("p");

//tworze tresc do paragrafu
var newElementContent = document.createTextNode ("To jest treść stworzonego paragrafu");

//wstawiam nowoutworzony tekst do nowoutworzonego paragrafu
newElement.appendChild( newElementContent );

//dodaje do paragrafu atrybut class='textpar'
newElement.setAttribute ( "class", "textpar");

console.log( newElement);

//wstawiam nasz przygotowany paragraf do div#output
istniejacyWezel.appendChild( newElement );

//usuwanie elementów z dokumentu
//istniejacyWezel.parentElement.removeChild( istniejacyWezel );
//document.getElementById("parFirst").removeChild(istniejacyWezel);

//insertBefore
var link = document.getElementsByClassName('superlink')[0];
var br = document.createElement('br');
console.log(link);
//link.parentElement.insertBefore( br, link);
//link.parentElement.insertBefore( br, link.insertBefore);

//usuwanie atrybutów (usuń se w domu)

//link.removeAttribute

