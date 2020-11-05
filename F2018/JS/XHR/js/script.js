'use strict';
window.onload = function () {
  let xhr =  new XMLHttpRequest();
  let url = "/my.json";
  xhr.open("GET",url,true);
  xhr.send();
  xhr.onload = function () {
    console.log(JSON.parse(xhr.responseText));
  }

  run.onclick = function () {
    let xhr =  new XMLHttpRequest();
    let url = "http://www.nbrb.by/API/ExRates/Currencies";
    xhr.open("GET",url,true);
    xhr.send();

    xhr.onload = function () {
      console.log(xhr.status,xhr.statusText);
      let responseData =  JSON.parse(xhr.responseText);
      console.log(responseData);
      responseData.forEach((item)=>{
        let div =  document.createElement("div");
            div.setAttribute("data-cur",item.Cur_ID);
            div.innerHTML = `${item.Cur_ID} - ${item.Cur_Name}`;
            div.addEventListener("click",moreCur);
            text.appendChild(div);
      })
    }
  }

  function moreCur() {
    let cur_id = this.getAttribute("data-cur");
    let that = this;
    let xhr =  new XMLHttpRequest();
    let url = `http://www.nbrb.by/API/ExRates/Rates/${cur_id}`;
    xhr.open("GET",url,true);
    xhr.send();

    xhr.onload = function () {

      let responseData =  JSON.parse(xhr.responseText);
      console.log(responseData);
      let div =  document.createElement("div");
          div.innerHTML = xhr.responseText;
          that.appendChild(div);
    }
  }
}
