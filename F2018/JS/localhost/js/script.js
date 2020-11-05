'use strict';
window.onload = function () {

  if(checkCookie('name')) {
    authForm.remove();
    text.innerHTML = `Привет, ${getCookie()}`;
    let exit = document.createElement('div');
    exit.innerHTML="Выход";
    exit.onclick = function () {
      setCookie('name','',-10);
      location.reload(true);
    }

    text.appendChild(exit);
  }

  else {
    send.onclick = function () {

      let val = userName.value;

      setCookie('name',val,60);
      console.log(document.cookie);
      console.log(getCookie());
      console.log(checkCookie('name'));
        console.log(checkCookie('test'));
    }
  }



  function setCookie(key,val,expires) {
    let date = new Date();
    date.setMinutes(date.getMinutes()+expires);
    document.cookie = `${key}=${val};expires=${date.toUTCString()}`;
  }

  function checkCookie(key) {
    return document.cookie.indexOf(key)!=-1 ? true :  false;
  }

  function getCookie(key) {
    return document.cookie.split("=")[1];
  }


}
