'use strict';
createClone();
let k = 0;
let add = document.querySelector(".add");
//let li = document.querySelectorAll(".big ol li");
let ol = document.querySelector(".big ol");
let li = ol.getElementsByTagName("li");
for (var i = 0; i < li.length; i++) {
  li[i].onclick = liRun;
  li[i].oncontextmenu = liSunMenu;
}

add.onclick = function () {
  let ol = document.querySelector(".big ol");
  let li = document.createElement("li");
  li.innerHTML = ++k;
  li.onclick = liRun;
  li.oncontextmenu = liSunMenu;
  ol.insertAdjacentElement("afterBegin",li);
  //ol.appendChild(li);
}



function liRun() {
  for (var i = 0; i < li.length; i++) {
    if(li[i].hasAttribute("class")) {
      li[i].removeAttribute('class')
      break;
    }

  }
  this.className = "active";
}

function createClone() {
  let div = createElementDOM("div","Clone");
  div.onclick = function () {
      document.body.appendChild(ol.cloneNode(true));
  }

  document.body.insertAdjacentElement("afterBegin",div);
}

function liSunMenu() {
  this.remove();
  return false;
}


function createElementDOM(name="div",text="",classForElement) {
  let elem = document.createElement(name);
  elem.innerHTML = text;
  if(classForElement!=undefined){
    elem.className = classForElement
  }

  return elem;
}

function randomNumber(min=1,max=10) {
  return Math.floor(min + Math.random() * (max + 1 - min));

}
