

class Osoba {
    constructor( imie, nazwisko, wiek, waga, wzrost, kolorOczu ) {
        this.imie = imie;
        this.nazwisko = nazwisko;
        this.wiek = wiek;
        this.waga = waga;
        this.wzrost = wzrost;
        this.oczy = kolorOczu;
    }
    przedstawSie() {
        console.log( "nazywam się " + this.imie +" " + this.nazwisko );
    }
    pobierzInformacjeOsoby() {
        console.log( "Dane osoby: \n Imię: " + this.imie + " \n Nazwisko: " + this.nazwisko + " \n")
    }
    
}
var osoba = new Osoba( "Michał", "Szczepaniak", 31, 65, 172, "zielone" );
//wywołujemy metode-funkcje-
osoba.przedstawSie();
osoba.pobierzInformacjeOsoby();

var osoba = new Osoba( "Marta", "Kapusta", 40, 70, 170, "niebieskie");
osoba.przedstawSie();