'use strict';

let td = document.getElementsByTagName("td");
let tr = document.getElementsByTagName("tr");


let sum = 0;
let mainVal = 0;
for (var i = 0; i < td.length; i++) {
  td[i].onclick = tbClick;
  td[i].innerHTML = randomNumber(1,20);
}

for (var i = 0; i < tr.length; i++) {
  mainVal+=+tr[i].children[i].innerHTML;
  tr[i].children[i].onclick = null;
  tr[i].children[i].className = "main";
}


main.innerHTML = `Сумма main = ${mainVal}`;
rez.innerHTML = `Сумма = ${sum}`;

function tbClick() {
  if(this.hasAttribute('class')){
    this.removeAttribute('class');
    sum-=+this.innerHTML; //sum = sum +this.innerHTML
    rez.innerHTML = `Сумма = ${sum}`;
  }
  else {
    this.setAttribute('class','active');
    sum+=+this.innerHTML; //sum = sum +this.innerHTML
    rez.innerHTML = `Сумма = ${sum}`;
  }
}

let gallery = document.getElementsByClassName('gallery')[0];
let img = gallery.getElementsByTagName('img');
big.setAttribute('src',img[0].getAttribute('src'));


for (var i = 0; i < img.length; i++) {
  img[i].onclick = galleryRun;
}




function galleryRun() {
  big.setAttribute('src',this.getAttribute('src'));
}

function randomNumber(min=1,max=10) {
  return Math.floor(min + Math.random() * (max + 1 - min));

}
