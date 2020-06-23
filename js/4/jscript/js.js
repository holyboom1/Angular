'use strict';
function randomInteger(min, max) {
    let rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(rand);
}

var n = randomInteger(5,15);
var array = [];
var i=0;

do {
    array.push(randomInteger(-10,10))

    i++;
}while(i<n);

console.log(array);
console.log(array.join(" "));

var namberOne=0,i=0, namberTwo=0, namberThree=0, namberFour=0;
namberOne=  array[0];
i=array.length-1;
namberTwo=array[i];

console.log(namberOne, namberTwo);

array[0]=namberTwo;
array[i]=namberOne;
console.log(array);

console.log(array.join(" "));

namberThree=array[1];
namberFour=array[i-1];

console.log(namberFour,namberThree);

array[1]=namberFour;
array[i-1]=namberThree;

console.log(array);
console.log(array.join(" "));


//вывети минимальное и максимальное
//выводим значения которые повторяются
for (var max=-Infinity, min=+Infinity,i=0;i<array.length;i++){
    if (array[i]<min) min=array[i]
    if (array[i]>max) max=array[i]
}
console.log("минимальное =" + min + "  максимальное = " + max)
console.log("наш массив  " + array)
for (var str="", k2=0, i=0;i<array.length;i++){
    var k1=0;
    while (k1<array.length) {
        if (array[i] == array[k1]) {
            str += array[i];

        }
        k1++
    }
}
console.log(str);
