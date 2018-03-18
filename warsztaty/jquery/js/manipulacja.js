$( function (){
    //pobieranie tekstu
    var textParagrafuId = $("#paragraf").text();
//    console.log ( textParagrafuId );
    
    //ustawienie tekstu
    $("#paragraf").text("Nowy tekst ustawiony metodą text()");
    
    //dodawanie html    
    $(".paragrafnext").html("<strong> tutaj nowa terść html </strong");
    
    //dodawanie treści na końcu selektora
    $(".paragrafnext").append("Nowa treść na końsu selektora");
    
    //dodawanie treści za selektorem
    $(".paragrafnext").after("<h6>Nowy element za selektorem</h6>");
    
    //usuwanie elementu wraz z zawartością
    $(".paragrafnext").remove();
    
    //usuwanie tylko zawartości elementu
    $("div").empty();
    
    //dodawanie pojedynczego stylu css
//    $("div").css("background-color", "red");
    
    //dodawanie wielu styli css
    $("div").css({
        width: "600px",
        height: "120px",
        backgroundColor: "green"
        
    });
    
    //dodawanie klasy do elementu
    $("h1").addClass("nowa_klasa");
    
    //dodawanie atrybutu do elementu
    $("h1").attr("title", "Głowny tytuł ustawiony za pomocą jQuery");
    
    
    
    
    
    
});