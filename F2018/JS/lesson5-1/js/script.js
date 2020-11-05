'use strict';
var s=0,p=1;
//var mas = [1,2,3,4,5,6,7,8,9];
var mas=[];

var min=1 , max=20;
var n = Math.floor(min + Math.random() * (max + 1 - min));
    //n = Math.floor(rand);

console.log(n);

//var x=+prompt("ввести число",10);
for (var i = 0 ; i<n; i++){
  mas.push(Math.floor(min + Math.random() * (max + 1 - min)));
}

console.log(mas.join(" / "));
/*
console.log(mas.join(" / "));

var y =  mas;
y[0] = 10;
var copy = [].concat(mas);




//console.log(mas.join(" / "))
//console.log(y.join(" | "))
//console.log(copy.join(" | "))
var del = copy.splice(3,2, [1,2,3,6]);
console.log(del, copy);
copy.push(1);
copy.shift();

console.log(copy.reverse());
var sum = 0;
for (var i = 0; i < copy.length; i++) {
  console.log(i,copy[i],sum);
  sum+=copy[i];


}

delete copy[5];
console.log(copy,copy[5]);
alert(copy.join());
console.log(sum);*/
