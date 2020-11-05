'use strict';
var html = document.documentElement;
console.log(html.children);
html.children[1].style.background = "#ccc";
var s = 14;

var body = document.body;
var li = body.children[1].children;

for (var i = 0; i < li.length; i++) {
    li[i].style.listStyle = "none";
    if(i%2==0){
      li[i].onclick = runLi1;
      li[i].style.textDecoration = "underline";
    }
    else {
      li[i].onclick = runLi2;
    }


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

function runLi1() {
  console.log(111);
}

function runLi2() {
  console.log(222);
}
