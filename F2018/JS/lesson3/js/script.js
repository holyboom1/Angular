'use strict';


var x = +prompt("Введите мне число?" , 10);
var y = +prompt("Введите мне число?" , 5);

if(!isNaN(x) && !isNaN(y)){
 if(x>y) {
   console.log("x>y  " + x + " > " + y);
 }
 else if(x<y){
    console.log("x<y  " + x + " < " + y);
 }

 else {
     console.log("x==y  " + x + " == " + y);
 }
}
else {
  console.error("число x совсем не число ");
}
