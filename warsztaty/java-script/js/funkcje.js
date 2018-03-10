// funkcja bez parametrów
function wyswietlWKonsoli() {
    console.log("Mikołaj Obliński");
}
wyswietlWKonsoli();

//funkcja z parametrami
function wyswietlWKonsoliParam(imie, nazwisko) {
    console.log(imie + " " + nazwisko);
}
wyswietlWKonsoliParam("Adam", "Nowacki");
wyswietlWKonsoliParam("Małgorzata", "Karpowska");

//zwracanie wartości przez funkcję
function obliczPodatek(kwota, procentPodatek) {
    var wynik = kwota * (procentPodatek / 100);
    return wynik.toFixed(2);
}
var obliczenia1 = obliczPodatek(1000, 10);
console.log("Wysokość obliczonego podatku wynosi: " + obliczenia1);

var w = obliczPodatek(1000, 10);
var x = obliczPodatek(2500, 15);
console.log("Wysokość podatku wynosi: " + w, x);