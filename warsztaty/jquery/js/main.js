
//document.redy gwarantuje, ze skrypy wywołają się w momencie gdy cały model DOM jest już załadowany
//poniżej skrócony zapis document.redy

$(function(){
//    $(".title").css({ color: "red", backgroundColor : "yellow"});
//    $("h2").css({ color: "red", backgroundColor : "yellow"});
    $("[class='title']").css({ color: "red", backgroundColor : "yellow"});
})