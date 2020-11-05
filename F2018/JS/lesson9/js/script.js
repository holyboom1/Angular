'use strict';
var html = document.documentElement;
console.log(html.children);
html.children[1].style.background = "#ccc";
var s = 14;

var body = document.body;
var li = body.children[1].children;

for (var i = 0; i < li.length; i++) {
    li[i].onclick = runLi;

}

up.onclick = function () {
  for (var i = 0; i < li.length; i++) {
      s+=5;
      li[i].style.fontSize = s+"px";
  }
}

block.onclick = function () {
  if(this.innerHTML == "show"){
    info.style.display="block";
    this.innerHTML="hide";

  }
  else {
    info.style.display="none";
    this.innerHTML="show";
  }
}

function runLi() {
  console.log(this.style.color);
  if(this.style.color==""){
    this.style.color="red";
  }
  else {
    this.style.color="";
  }
}
