'use strict'

var x=+prompt("введите число", 1);
var str = "";
var k=0;
var kk=0;
    if (!isNaN(x)) {
        kk=x;
        do {
            var kol=0;
            do{
                str += "*"
                kol++
            }while (kol<kk)
            str += "\n";
        k++
        kk--
        } while (k<x)
        }
    else {
        console.error("не число")
    }
console.log(str);
