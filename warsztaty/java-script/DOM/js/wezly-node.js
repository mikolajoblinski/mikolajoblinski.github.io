var parFirst = document.getElementById("parFirst");

//pobieram rodzica dla elementu #parFirst za pomocą właściwości parentElement
//console.log ( parFirst.parentElement );

// childNodes pobiera wszystkie węzły w tym takze białe znaki między elementami jako "tekst" oraz komentarze
//console.log (parFirst.childNodes);

//children pobiera tylko te węzły które są elementami html
//console.log (parFirst.children);

//pobieram pierwsze dziecko elementu #parFirst
var pierwszeDziecko = parFirst.children[0];
//console.log ( pierwszeDziecko );

//pobieram następny węzeł dla pierwszeDziecko, który jest elementem w relacji rodeństwo
//console.log ( pierwszeDziecko.nextElementSibling);

//pobieram następny węzeł dla pierwszeDziecko niezależnie czy jest elementem html czy białym znakiem(tekstem, komentarzem)
//console.log ( pierwszeDziecko.nextSibling);

//lastChild pobiera ostanie dziecko elementu niezależnie czy jest elementem html czy nie
var ostatnieDziecko = parFirst.lastChild;
//lastElementChild pobiera ostatnie dziecko które jest elemnem html
var ostatnieDziecko = parFirst.lastElementChild;
console.log( ostatnieDziecko );
console.log( ostatnieDziecko.previousSibling );


