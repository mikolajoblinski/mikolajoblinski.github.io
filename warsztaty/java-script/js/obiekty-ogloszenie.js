class Ogloszenia {
	constructor( tytul, tresc, cena, kategoria ) {
	this.tytul = tytul;
	this.tresc = tresc;
	this.cena = cena;
		this.kategoria = kategoria;
	}
	wyswietl() {
		var ogloszenie = "tytuł ogłoszenia: " + this.tytul + "treść: " + this.tresc + " cena: " + this.cena + " Kategoria: " + this.kategoria;
		
		return ogloszenie;
		}
}
 var ogloszenie1 = new Ogloszenia( "Sprzedam Opla", "niemiec plakal jak sprzedawał", 5000, "Osobowe");
var ogloszenieDoWyswietlenia = ogloszenie1.wyswietl();
console.log( ogloszenieDoWyswietlenia );