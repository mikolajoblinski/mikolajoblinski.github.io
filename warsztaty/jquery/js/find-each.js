//metoda find wyszukuje potomków selektora. W poniższym przykładzie poszuka paragrafów znajdujących sie w div. metoda find może wyszukiwać po tagu, klasie, id, atrybucie

$("div").find("p").css({fontSize: "60px", color: "pink"});

//w poniższym przykładzie wyszuka paragrafy znajdujące sie w body
//$("body").find("p").css({fontSize: "60px", color: "pink"});

//metoda each (pętla po elementach) - jako parametr przyjmuję funkcje zwrotną, ktora zostanie wykonana na kazdym znalezionym elemencie
$("p").each( function( index, element){
    console.log( index, element);
    $(this).addClass("new_class").css({fontSize: "40px", backgroundColor: "yellow"});
});