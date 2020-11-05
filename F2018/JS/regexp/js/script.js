'use strict';
window.onload = function () {
  let regExpTel = /^(\+375)?(29|25|33|44)-\d{3}(-\d{2}){2}$/;
  let regExpLogin = /^[\.a-zA-Z0-9_]{6,20}$/;

  console.log(text.innerHTML.match(/\s\d{2}\s/g));
  console.log(text.innerHTML.replace(/\d{2}/i,""));
  console.log(/\s\d{2}\s/g.exec(text.innerHTML));
  tel.onblur = function () {

    if(regExpTel.test(this.value)) {
      this.classList.remove('error');
      this.classList.add('seccuss');
    }
    else {
      this.focus();
      this.classList.add('error');
    }

  }


  login.onblur = function () {

    if(regExpLogin.test(this.value)) {
      this.classList.remove('error');
      this.classList.add('seccuss');
    }
    else {
      this.focus();
      this.classList.add('error');
    }

  }

}
