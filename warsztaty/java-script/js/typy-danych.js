//typ liczbowy - można wykonywać działania arytmetyczne
var wyplata = 4500;
var premia = 850;
var suma = wyplata + premia;
console.log( typeof wyplata );

//typ łańcuchowy
var strWyplata = "4500\n";
var strPremia = "\"850\"";
var strSuma = strWyplata + strPremia;
console.log( strSuma );
console.log( typeof strSuma );

//typ logiczny - przyjmuje jedna z dwoch wartości
var czyJestWiosna = true;
if( czyJestWiosna ) {
 console.log( "Tak, jest wiosna");   
} else {
    console.log( "nie, nie ma wiosny");
}
    console.log( typeof czyJestWiosna);

//typy specjalne
var zmiennaTylkoZadeklarowana;
console.log( zmiennaTylkoZadeklarowana );
 var zmiennaNull = null;
console.log( zmiennaNull );