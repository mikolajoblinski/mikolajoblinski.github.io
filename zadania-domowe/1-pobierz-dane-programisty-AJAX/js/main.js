$(function(){
    $("button").on("click", function(e){
        
        $.getJSON( "https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php", function(data){            
            
            //pobranie danych "ręcznie"
            $("body").append("<div>imie: " + data.imie + ", nazwisko: " + data.nazwisko + ", zawód: " + data.zawod + ", firma: " + data.firma + "</div>");
            $("div").attr("id", "dane-programisty");
            
            //pobranie danych za pomocą pętli
//            $("body").append("<div></div>");
//            $("div").attr("id", "dane-programisty");
//            
//            for( var property in data){
//                $("div").append(property +": " + data[property] + ", ");
//            }
        })
    })
})