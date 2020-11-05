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

var testArray = [1,5,68,7,9,8,7,9,1,3,2,4,0];

function removeData(array=[],arrayRemove=[]) {
  var l = array.length;

  if(arrayRemove.length==0){
    return "Данные не очень";
  }


  for (var i = 0; i < arrayRemove.length; i++) {
    console.log(arrayRemove[i]);
    while(array.indexOf(arrayRemove[i])!=-1){
      array.splice(array.indexOf(arrayRemove[i]),1);
    }

    if(array.length==0) break;
  }

  if(array.length == l) {
    return "Данные не были подправлены";
  }

  return array.join(" / ");
}

console.log(removeData([1,1],[6,8,1,89,7]));

//console.log(removeData([].concat(testArray),[1,7]))


mas = arrayInsertValues([].concat(mas),randomNumber(),1,30);
console.log(mas.join(" "));
console.log(arrayMax([].concat(mas)));


mas = arrayInsertValues([].concat(mas),5,35,50);
console.log(mas.join(" "));
console.log(arrayMax([].concat(mas)));



var arrow = (x,y) => {
  if(x>y) return x+y
  else return x*y
}
