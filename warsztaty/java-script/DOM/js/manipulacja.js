// inner html - pobieranie
var parFirst = document.getElementById("parFirst");
//console.log( parFirst.innerHTML );
//console.log( parFirst.outerHTML );

//inner html - przypisanie wartosci
var mainHeader = document.querySelector("h1");
mainHeader.innerHTML = "<span>Nowa zawartość h1 wstawiona w span</span>";

//zmiana styli
mainHeader.style.color = "black";
mainHeader.style.backgroundColor = "red";

//przypisanie klasy
mainHeader.className = "headintekst";

//pobieranie klas elementu
console.log ( mainHeader.className );

//class list - dodawanie klasy
mainHeader.classList.add ("nowa-klasa");

//class list - usuwanie klasy
mainHeader.classList.remove ("headingtekst");