'use strict';
function randomInteger(min, max) {
  let rand = min - 0.5 + Math.random() * (max - min + 1);
  return Math.round(rand);
}

var n = randomInteger(3,15);
var array = [];
var str=""; var strNew="";

for(let i=0;i<n; i++) {

	if (i!=0 && i!=array.length-1){
		array.push(0)}

	if (i==0){
		array.push(1)}
}

	array.push(1)

console.log(array.join(" "))