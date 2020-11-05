'use strict';
window.onload = function () {
  add.addEventListener('click',addFiles);
  let k = 0;

  function addFiles() {
    let elem =document.createElement('div');
    let input = document.createElement('input');
    let rm = document.createElement('span');
    elem.setAttribute('data-id',++k);
    input.setAttribute('data-id',k);
    input.type="file";
    input.name="files[]";
    input.addEventListener('change',changeInput);
    rm.addEventListener('click',removeInput);
    rm.innerHTML = "r";
    elem.appendChild(rm);
    elem.appendChild(input)
    listFiles.appendChild(elem);

  }

  function changeInput() {
    console.log(this.value);

    let fileName = this.value.slice(this.value.lastIndexOf("\\")+1)
    let k = this.getAttribute("data-id");
    if(!list.querySelector(`li[data-id="${k}"]`)){
      let li  = document.createElement("li");
      li.innerHTML = fileName;
      li.setAttribute('data-id',k);
      list.appendChild(li);
    }
    else {
      list.querySelector(`li[data-id="${k}"]`).innerHTML = fileName;
    }
    let div  = document.createElement("div");
    div.className = "message";
    div.innerHTML = `Файл ${fileName} был добавлен в список`;
    document.body.appendChild(div);
    setTimeout(function () {
      div.remove();
    },3000);

  }

  function removeInput(id) {
    if(id===undefined){

    }
    else {
      let id= this.parentNode.getAttribute("data-id");
      this.parentNode.remove();
      let rm = list.querySelector(`li[data-id="${id}"]`);
      if(rm) {
        rm.remove();
      }

    }

  }

  function listSelect() {

  }
}
