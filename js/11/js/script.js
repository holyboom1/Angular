'use strict';
function randomInteger(min, max) {
  let rand = min - 0.5 + Math.random() * (max - min + 1);
  return Math.round(rand);
}

var n = randomInteger(5,5);
var array = [];
var str=""; var strNew="";

for(let i=0;i<n; i++){
	array.push([]);
	for(let j=0;j<n; j++){
		array[i].push(randomInteger(1,9))
	}
	
	str+=array[i].join(" ") + "\n";


}
console.log(str + "\n")

var str="";
var k=1
var max=+Infinity;
var swap=0;
for (var i=0; i<array.length; i++){
	for (var j=0; j<array.length; j++)
		if (array[i][j]<max){
			max=array[i][j];
		}
		if (j==array.length-k){
			array[i][k-1]=max;
			max = 0;
			k++;
				}

}

for (var i=0; i<array.length; i++){
	str+=array[i].join(" ")+"\n"
}

console.log(str)

