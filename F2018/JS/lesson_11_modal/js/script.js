'use strict';

let gallery = document.getElementsByClassName('gallery')[0];
let img = gallery.getElementsByTagName('img');
big.setAttribute('src',img[0].getAttribute('src'));
imgText.innerText = img[0].getAttribute('alt');
img[0].className="active";

big.onclick = modalRun;
closeModal.onclick = closeModalWindow;

for (var i = 0; i < img.length; i++) {
  img[i].onclick = galleryRun;
}




function galleryRun() {
  big.setAttribute('src',this.getAttribute('src'));
  let li = gallery.children;

  for (var i = 0; i < li.length; i++) {
    if(li[i].children[0].hasAttribute("class")){
      li[i].children[0].removeAttribute("class");
      break;
    }
  }

  this.className = "active";
  imgText.innerText = this.getAttribute('alt')
}

function modalRun() {
  modal.style.display = "block";
  modalImg.src = big.src;
  modalText.innerText = imgText.innerText;
}

function closeModalWindow() {
  //console.log(modal)
  if(modal.style === undefined) {
    modal.setAttribute("style","display:none");
    return true;
  }
  modal.style.display = "none";

}


function randomNumber(min=1,max=10) {
  return Math.floor(min + Math.random() * (max + 1 - min));

}
