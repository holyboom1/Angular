'use strict';
window.onload = function () {
  add.addEventListener('click',addFiles);


  function addFiles() {
    let input = document.createElement('input');
    let rm = document.createElement('span');
    input.type="file";
    input.name="files[]";
    input.addEventListener('change',changeInput);
    rm.addEventListener('click',removeInput);
    rm.innerHTML = "r";

    listFiles.appendChild(rm);
    listFiles.appendChild(input);
  }

  function changeInput() {
    console.log(this.value);

    let fileName = this.value.slice(this.value.lastIndexOf("\\")+1)
    console.log(fileName);
    let li  = document.createElement("li");
    li.innerHTML = fileName;
    list.appendChild(li);

    let div  = document.createElement("div");
    div.className = "message";
    div.innerHTML = `Файл ${fileName} был добавлен в список`;
    document.body.appendChild(div);
    setTimeout(function () {
      div.remove();
    },3000);

  }

  function removeInput() {
      this.nextSibling.remove();
      this.remove();
  }

  function listSelect() {

  }
}
