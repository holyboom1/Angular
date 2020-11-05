'use strict';

let td = document.getElementsByTagName("td");
let sum = 0;
for (var i = 0; i < td.length; i++) {
  td[i].onclick = tbClick;
}

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
