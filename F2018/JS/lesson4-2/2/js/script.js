'use strict';
var s=0,p=1;
var strP="",strAll="",strO="";
var output = "";
do {

  var x=+prompt("Введите число",null);
  if (!isNaN(x)){
    if(x>0){
      strP+=x+" ";
      p*=x;
    }
    else if(x<0){
      strO+=x+" ";
      s+=x;
    }
    else break;
  }

  strAll+=x+" ";

}while(true);

console.log("Последовательность =" +strAll + "\n"+
            "+ числа"  +strP + "\n"+
            "- числа"  +strO + "\n"+
            "Сумма = "  +s + "\n"+
            "Произведение ="  +p);
