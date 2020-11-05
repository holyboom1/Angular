'use strict';
var mas = [];
var min=2;
var max =5;
var str= "";
var str2= "";
var n = Math.floor(min + Math.random() * (max + 1 - min));
for (var i=0; i<n; i++){
  mas[i]=[];
  var sum=0;
  for (var j=0; j<n; j++){
    mas[i].push(Math.floor(min + Math.random() * (max + 1 - min)));
    sum+=mas[i][j];
  }

  str+=mas[i].join(" ") + "\n";
  str2+="summa " + (i+1) + " stroki = " +sum+ "\n";


}
console.log(str);
console.log(str2);
