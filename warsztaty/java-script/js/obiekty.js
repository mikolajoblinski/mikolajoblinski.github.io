var name = 'tu jestem poza obiektem';

var obiekt = {
    name: "Pierwszy obiekt",
    height: 190,
    print: function() {
        console.log(this.name);
    },
}
obiekt.print();

//dodawanie właściwości
obiekt.age = 32;

obiekt.showAge = function() {
    console.log( this.age )
}
obiekt.showAge();