'use strict';
var cube=null;
window.onload = function () {
  window.addEventListener('click',clickRun);
  window.addEventListener('contextmenu',clickRun);
  window.addEventListener('keydown',keyRun);
  window.addEventListener('wheel',wheelRun);
  window.addEventListener('keypress',keyPress);


  setTimeout(function () {
    console.log('работает timeout');
  },5000);

  setInterval(function () {
    console.log('работает timeout');
  },1000);
  console.log(box.style.left);
  cube = setInterval(function () {
    let left = parseInt(box.style.left);
    box.style.left=left+1+"px";
  },10);
}

function clickRun(e) {
  if(e.type==="click")  {
    let div = document.createElement("div");
    div.innerText = "block";

    document.body.appendChild(div);
    setTimeout(function () {
      div.remove();
    },5000)
  }
  else if(e.type==="contextmenu") {
    e.preventDefault();

    if(e.ctrlKey) {
      document.body.style.background = "red";
    }
    else {
      document.body.style.background = "";
    }
  }
}


function keyRun(e) {
  console.log(e.which);
  if(e.which===27) clearInterval(cube);
}

function keyPress(e) {
  console.log('press ----',e.which);
}

function wheelRun(e) {
  if(e.wheelDelta==-120)
    document.body.style.background = "#DDD";
  else
    document.body.style.background = "#FF0";

}
