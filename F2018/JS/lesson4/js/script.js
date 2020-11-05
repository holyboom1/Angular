'use strict';
var sum=0;
var output = "";
do {

  var x=+prompt("Введите число",null);
  if(x===0) break;
  if (!isNaN(x)){
    sum+=x;
    output+=x+" ";
  }

  console.log(x,sum);
}while(true);

console.log("Последовательность =" +output + " \nСумма = "+sum);
