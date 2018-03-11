var imiona = ['Adam', 'Marta', 'Darek', 'Paweł', 'Kasia'];
imiona[5] = 'Mikołaj';
imiona[6] = 'Kinga';
//dodawanie elementów do tablicy na końcu
imiona.push('Michał');
/*mozna dodawać kilka argumentów-imion- do zmiennej*/
imiona.push('Marcin')

//usuwanie el tablicy z konca
imiona.pop();
imiona.pop();

//dodawanie el tablicy na początku
imiona.unshift('sebastian');

//usuwanie el z poczatku tablicy
imiona.shift();

var usunietyElement = imiona.shift();
//console.log( usunietyElement );

var iloscElementowTablicy = imiona.length;
//console.log( iloscElementowTablicy );
//console.log( imiona );

//rozbijanie tablicy na ciąg tekstowy
var elementyTablicyString = imiona.join();
console.log( elementyTablicyString );

//odwrócenie tablicy
//imiona.reverse();
//console.log( imiona );

//sortowanie tablicy
//imiona.sort();
console.log(imiona);

//sprawdzanie czy zawartość tablicy isnieje
//console.log( imiona.indexOf("Kinga"));
/*można doczytać o wyrażeniach regularnych, jako opje wyszukiwania zawartości tablicy indexOf*/

//usuwanie wybranego elementu z tablicy
imiona.splice(2,1);
console.log(imiona);