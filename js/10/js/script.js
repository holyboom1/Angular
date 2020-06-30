'use strict';
function randomInteger(min, max) {
  let rand = min - 0.5 + Math.random() * (max - min + 1);
  return Math.round(rand);
}

var n = randomInteger(3,8);
var array = [];
var str=""; var strNew="";

for(let i=0;i<n; i++){
	array.push([]);
	for(let j=0;j<n; j++){
		array[i].push(randomInteger(1,9))
	}
	
	str+=array[i].join(" ") + "\n";


}

var  newArray=[].concat(array);

// замена местами столбцов
for (var i=0 , x=0, y=0; i<newArray.length; i++){
		x=array[i][array.length-1]
		y=array[i][0]
		newArray[i][0]=x
		newArray[i][newArray.length-1]=y
	strNew+=newArray[i].join(" ") + "\n";
}

console.log("до \n" + str + "\n" + "после \n" + strNew)

// сумма строки
for (var i=0, sum=0 , str=""; i<array.length; i++){
	for (var j=0; j<array.length; j++)
	{
		sum+=array[i][j]
	}
	str+=array[i].join(" ") + "  summ = " + sum +  "\n";
	sum=0;
}
console.log("\n" + str);

// сумма столбца
for (var i=0, sum=0 , k=1 , str=""; i<array.length; i++){
	for (var j=0; j<array.length; j++)
	{
		sum+=array[j][i]
	}
	str+="столбец №"+ k +  "  summ = " + sum +  "\n";
	sum=0;
	k++
}
console.log("\n" + str);

// макс элемент заменить звездой
var max=0;
for (var i=0; i<array.length; i++){
	for (var j=0; j<array.length; j++)
		if (array[i][j]>max){
			max=array[i][j];
		}
}
for (var i=0, strNew=""; i<array.length; i++){
	for (var j=0; j<array.length; j++)
		if (array[i][j]==max){
			array[i][j]="*";
		}
	strNew+=array[i].join(" ") + "\n";
}
console.log(strNew)