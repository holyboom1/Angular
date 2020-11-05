'use strict';
var mas = [];
function randomNumber(min=1,max=10) {
  return Math.floor(min + Math.random() * (max + 1 - min));

}
var arrayMax = function (mas=[]) {
  if(mas.length==0) {
    return "Массив пустой";
  }
  var max = mas[0];
  for (var i = 0; i < mas.length; i++) {
    if(mas[i]>=max) max=mas[i];
  }

  return max;
}

function arrayInsertValues(mas=[],n=0,min=1,max=10) {
  for (var i = 0; i < n; i++) {
    mas.push(randomNumber(min,max));
  }

  return mas;
}

function test() {
  var y = 1;
  return function () {
    return ++y;
  }
}

mas = arrayInsertValues([].concat(mas),randomNumber(),1,30);
console.log(mas.join(" "));
console.log(arrayMax([].concat(mas)));


mas = arrayInsertValues([].concat(mas),5,35,50);
console.log(mas.join(" "));
console.log(arrayMax([].concat(mas)));


var my = test();
var my2 = test();
console.log(my());
console.log(my());
console.log(my());
console.log(my());
console.log(my());

console.log(my2());
console.log(my2());

var arrow = (x,y) => {
  if(x>y) return x+y
  else return x*y
}

console.log(arrow(20,30));
