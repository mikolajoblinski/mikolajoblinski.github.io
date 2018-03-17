var parFirst = document.getElementById ("parFirst")
var parFirstNodes = parFirst.childNodes;
console.log( parFirstNodes);

//for ( var i=0; i< parFirstNodes.length; i++) {
//    if(parFirstNodes[i].nodeType == 1) {
//    console.log ( parFirstNodes[i]);
//    }
//}
//zamiast petli for szybciej(nowszy sposób) bedzie użyć parFirst.children( w zmiennej var parFirstNodes)