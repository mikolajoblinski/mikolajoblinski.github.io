var paragraf = document.getElementById("par2");

////sposób 1
//function obsluzZdarzenie( event ){
////    console.log("clic");
//    console.log(event.type);
//}
//
//paragraf.onclick = obsluzZdarzenie;/* tutaj przy wywoływaniu zdarzenia nie dajemy nawiasów na końcu tak jak przy wywoływaniu funkcji*/
//
////sposób 2 (najlepiej używać tego)
//paragraf.onclick = function(e) {
//    console.log ( "do obsługi zdarzenia przypisana funkcja anonimowa");
//}

//var counter = 0;
//paragraf.addEventListener ("mouseenter", function(event) {
//    counter ++;
//    console.log ( event.type );
//    console.log ( "zdarzenie wywołane " + counter + "raz");
//});

//var title = document.getElementById("main-header");
//title.addEventListener("mouseenter", function(){
//    title.style.fontSize = "70px";
//});
//title.addEventListener("mouseleave", function(){
//    title.style.fontSize = "initial";
//});

//function bodyColor (){
//    document.body.style.backgroundColor = "red";
//}
//var title = document.getElementById("main-header");
//title.addEventListener("click", bodyColor);
//
////usuwanie obsługi zdarzenia
////title.removeEventListener("click", bodyColor);

// blokowanie domyślnego działania elementu
document.querySelector(".link1").addEventListener("click", function( event){
    event.preventDefault();
    console.log("kliknąłem link klasy .link1");
});
//
