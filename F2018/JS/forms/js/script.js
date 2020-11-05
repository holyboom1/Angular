'use strict';
window.onload = function () {
  document.test.elements[0].focus();
  let run = document.querySelector(`input[type="button"]`);
  let textarea = document.querySelector(`textarea`);
  let fields = document.querySelectorAll(`.field`);

  run.addEventListener('click',checkForm);
  fileAttachment.addEventListener('change',checkFiles);
  textarea.addEventListener('input',checkText);
  city.addEventListener('change',checkSelect);

  for (var i = 0; i < fields.length; i++) {
    fields[i].addEventListener('blur',checkFields);
  }

  function checkFiles() {
    console.log(this.value);
  }

  function checkSelect() {
    console.log(this.value);
  }

  function checkForm() {
    let str = "";
    let flag = true;
    for (var i = 0; i < fields.length; i++) {
      if(fields[i].value!=""){
        str+=fields[i].value + "<br />";
        fields[i].classList.add('success');
        //fields[i].disabled = true;
      }
      else {
        fields[i].classList.add('error');
        flag=false;
      }
    }

    if(flag) {
      let div = document.createElement('div');
      div.innerHTML = str;
      document.body.appendChild(div);
    }


  }

  function checkFields() {
    if(this.value=="") {
      this.focus();
      this.classList.add('error');

    }
    else {
      this.classList.remove('error');
      this.classList.add('seccuss');
      this.disabled = true;
    }
  }

  function checkText() {
    if(this.value.length>30){
      this.value=this.value.splice(0,30);
    }
    count.innerHTML = this.value.length;
  }
}
