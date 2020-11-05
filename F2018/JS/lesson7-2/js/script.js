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

function showStringMatrix(matrix=[]) {
  var str = "";
  for (var i = 0; i < matrix.length; i++) {
    str+=matrix[i].join(" ")+ "\n";
  }

  return str;
}

function sumMatrix(matrix1=[],matrix2=[]) {
  var mas=[];
  for (var i = 0; i < matrix1.length; i++) {
    mas.push([]);
    for (var j = 0; j < matrix1[i].length; j++) {
      mas[i].push(matrix1[i][j]+matrix2[i][j]);
    }
  }

  return mas;
}


var k = randomNumber(2,4);



 var matrix1=[], matrix2=[];
for (var i = 0; i < k; i++) {
  matrix1.push(arrayInsertValues([],k,1,5));
  matrix2.push(arrayInsertValues([],k,1,5));

}

console.log(showStringMatrix(matrix1));
console.log(showStringMatrix(matrix2));
console.log(showStringMatrix(sumMatrix(matrix1,matrix2)));
