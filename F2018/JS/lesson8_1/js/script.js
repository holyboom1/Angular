'use strict';
var mas = [];


add.onclick = function () {

  mas.push(+prompt("Введите число",10))
  console.log(mas[mas.length-1] + " Был добавлен в массив");
  //rez.innerHTML = mas.join(" ");
}



show.onclick = function () {

  rez.innerHTML = mas.join(" ") +" = " + arraySum();
}




function arraySum() {
  var sum = 0;
  for (var i = 0; i < mas.length; i++) {
    sum+=mas[i];
  }

  return sum;
}
