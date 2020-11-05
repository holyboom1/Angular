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

rand.onclick = function () {
  mas.push(randomNumber());
  console.log(mas[mas.length-1] + " упал в массив");
  //rez.innerHTML = mas.join(" ") +" = " + arraySum();

}

remove.onclick =function () {

  do {
      var x = +prompt("Число",3);
  }while(checkNumber(x));

  for (var i = 0; i < mas.length; i++) {
    if(mas[i]===x) {
      mas.splice(i,1);
      i--;
    }
  }

  rez.innerHTML ="Минимальный элемент = " + min;
}

sortUp.onclick =function () {

  for (var i = 0; i < mas.length; i++) {
    for (var j = i; j < mas.length; j++) {
      if(mas[i]<mas[j]){
        var elem = mas[i];
        mas[i]=mas[j];
        mas[j]=elem;
      }
    }
  }

  rez.innerHTML = mas.join(" ") +" = " + arraySum()
}

min.onclick =function () {
  //console.log(111);
  var min = mas[0];

  for (var i = 0; i < mas.length; i++) {
    if(mas[i]<min) {
      min = mas[i];
    }
  }

  rez.innerHTML ="Минимальный элемент = " + min;
}


function checkNumber (x) {
  if(isNaN(x)) return true
  else false
}


function randomNumber(min=1,max=10) {
  return Math.floor(min + Math.random() * (max + 1 - min));

}
function arraySum() {
  var sum = 0;
  for (var i = 0; i < mas.length; i++) {
    sum+=mas[i];
  }

  return sum;
}
