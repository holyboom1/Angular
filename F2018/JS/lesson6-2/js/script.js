'use strict';
var mas = [];
var min=2;
var max =5;
var str= "";
var str2= "";
var str3= "";
var str4= "";
var str5= "";
var n = Math.floor(min + Math.random() * (max + 1 - min));
for (var i=0; i<n; i++){
  mas[i]=[];
  var sum=0;
  for (var j=0; j<n; j++){
    mas[i].push(Math.floor(min + Math.random() * (max + 1 - min)));
  }
  str+=mas[i].join(" ") + "\n";
}

for (var i=0; i<n; i++){
  var sum=0;
  var sum2=0;
  for (var j=0; j<n; j++){
      sum+=mas[i][j];
      sum2+=mas[j][i];
  }
  str2+="summa " + (i+1) + " stroki = " +sum+ "\n";
  str3+="summa " + (i+1) + " stolb = " +sum2+ "\n";
}

var copy = mas[0];
mas[0]=mas[mas.length-1];
mas[mas.length-1] = copy;

for (var i=0; i<n; i++){
    str4+=mas[i].join(" ") + "\n";
}

for (var i=0; i<n; i++){
    var copy = mas[i][0];
    mas[i][0]=mas[i][mas[i].length-1];
    mas[i][mas[i].length-1]=copy;
}

for (var i=0; i<n; i++){
    str5+=mas[i].join(" ") + "\n";
}





console.log(str);
console.log(str2);
console.log(str3);
console.log("stroki\n",str4);
console.log("stolbiki\n",str5);
