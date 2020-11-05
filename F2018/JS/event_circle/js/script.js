'use strict';
var cube=null;
window.onload = function () {

  setInterval(function () {
      let div=document.createElement('div');
      div.className = "circle";
      let d = randomNumber(50,100);
      let r = randomNumber(0,255);
      let g = randomNumber(0,255);
      let b = randomNumber(0,255);
      let pX = randomNumber(150,1000);
      let pY = randomNumber(150,650);
      let param = `width:${d}px;height:${d}px;background:rgb(${r},${g},${b});left:${pX}px;top:${pY}px;`
      div.setAttribute('style',param);
      document.body.appendChild(div);

    },3000);

  function randomNumber(min=1,max=10) {
     return Math.floor(min + Math.random() * (max + 1 - min));
  }
}
