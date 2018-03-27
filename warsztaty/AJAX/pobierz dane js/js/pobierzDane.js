function pobierzDane( event ){
    event.preventDefault();
    
    ajax("GET", "http://echo.jsontest.com/userId/108/userName/Akademia108/userURL/akademia108.pl" , 
         wrzucDaneDoHtml
         //function(data){
//    console.log(data);
        
//        var userId = document.createElement('p');
//        var userName = document.createElement('p');
//        var userUrl = document.createElement('p');
//        var newParagrafContent1 = document.createTextNode("userId: " + data.userId);
//        var newParagrafContent2 = document.createTextNode("userName: " + data.userName);
//        var newParagrafContent3 = document.createTextNode("userURL: " + data.userURL);
//        userId.appendChild(newParagrafContent1);
//        userName.appendChild(newParagrafContent2);
//        userUrl.appendChild(newParagrafContent3);
//        document.body.appendChild(userId);
//        document.body.appendChild(userName);
//        document.body.appendChild(userUrl);
    
    //}
        )}
    
    //alternatywny sposób(tworzę dodatkową funkcje i dodaje ją do ajax'a)
function wrzucDaneDoHtml(dane){
    
    var userId = document.createElement('p');
    var userName = document.createElement('p');
    var userUrl = document.createElement('p');
    var dotted = document.createElement('p');
    
    var newParagrafContent1 = document.createTextNode("userId: " + dane.userId);
    var newParagrafContent2 = document.createTextNode("userName: " + dane.userName);
    var newParagrafContent3 = document.createTextNode("userURL: " + dane.userURL);
    var newParagrafContent4 = document.createTextNode("--------------");
    
    userId.appendChild(newParagrafContent1);
    userName.appendChild(newParagrafContent2);
    userUrl.appendChild(newParagrafContent3);
    dotted.appendChild(newParagrafContent4);
    
    document.body.appendChild(userId);
    document.body.appendChild(userName);
    document.body.appendChild(userUrl);
    document.body.appendChild(dotted);
}
    
    function ajax (method, url, callback) {
        var httpRequest = new XMLHttpRequest();

        httpRequest.open( method, url);

        httpRequest.onreadystatechange = function(){
            if(httpRequest.readyState == 4){
                if(httpRequest.status == 200){
                    
                    var returnData = httpRequest.responseText;
//                    returnData.userId //undefind
                    
                    var jsonObj = JSON.parse(returnData);
//                    jsonObj.userId //==108

                    callback(jsonObj);

                    httpRequest = null;
                }
            }
        }
        httpRequest.send();
    }
