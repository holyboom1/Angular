'use strict';
window.onload = function () {
  let xhr =  new XMLHttpRequest();
  let url = "/my.json";
  xhr.open("GET",url,true);
  xhr.send();
  xhr.onload = function () {
    JSON.parse(xhr.responseText).forEach((item)=>{
      let images = document.createElement('div');
      item.Images.forEach((img)=>{
        console.log(img);
        let elemImg =document.createElement('img');
        elemImg.src = img;
        images.appendChild(elemImg);
      })
      let parent =document.createElement('div');

      parent.innerHTML = `
        ${item.Title} <br />
        ${item.Cat} <br />
        ${item.Date} <br />
        ${item.Desc} <br />
        ${item.Desc} <br />
      `
        parent.appendChild(images);
      text.appendChild(parent);
    })
  }

/*
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
  */
}
