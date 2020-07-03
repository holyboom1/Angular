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
var k=[[]]
var min=+Infinity;
var del=0;
var kk=0;
var swap=0;
for (var i=0; array.length>i;i++){
		for (var z=0; z<array.length; z++)
		{
		  if (array[i][z]<min){
		    min = array[i][z]
		    del=z
		  }
		 if (z==array[i].length-1 && z!=0 ){
		     k[kk].push(min)
		    array[i].splice(del,1)
	  	  min=+Infinity
		     z=0
		    }
		  if (array[i].length==1 ){
        k[kk].push(min)
		  }
		 }
		 k.push([])
		 kk++
		  
		}
	
	 



for (var i=0; i<k.length; i++){
	str+=k[i].join(" ")+"\n"
}

console.log(str)
console.log(array)

