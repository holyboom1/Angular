'use strict';
window.onload = function () {
  function createItem(obj,eventType,eventFun){
    let parent = document.createElement("div");
    parent.setAttribute("data-id", obj.id);
    parent.className = "parent";
    let title = document.createElement("div");
    let body = document.createElement("div");
    parent.appendChild(title);
    parent.appendChild(body);
    title.innerHTML = obj.title;
  //  console.log(title);
    body.innerHTML = obj.body;
    app.appendChild(parent);
    if(eventType!= undefined){
      title.addEventListener(eventType,eventFun);
    }

    title.setAttribute("data-id", obj.id);
  }
  fetch("https://jsonplaceholder.typicode.com/posts")
  .then(function (response){
    return  response.json()
  })
  .then(json => {
    json.forEach((item) => {
     createItem(item,"click",getItem);
    })
  })



 function getItem() {
   console.log(this.getAttribute("data-id"));
   // https://jsonplaceholder.typicode.com/posts/88
   fetch(`https://jsonplaceholder.typicode.com/posts/${this.getAttribute("data-id")}`)
   .then((response)=> response.json())
   .then((post)=>{
     fetch(`https://jsonplaceholder.typicode.com/comments?postId=${this.getAttribute("data-id")}`)
     .then((response)=> response.json())
     .then((json)=>{
       app.innerHTML = "";
       createItem(post);
        json.forEach((item) =>{
          let comments = document.createElement("div");
          comments.innerHTML = `
          <p>${item.name}</p>
          <p>${item.body}</p>
          <p>${item.email}</p>
          `
          app.appendChild(comments);
       })
       //console.log(json);
       //console.log(post);
     })
   })



 }




  // var getData = function (url) {
  //   return new Promise((res,rej)=>{
  //     let xhr =  new XMLHttpRequest();
  //
  //     xhr.open("GET",url,true);
  //     xhr.send();
  //     xhr.onload = function () {
  //         if(xhr.status==200){
  //           res(JSON.parse(xhr.responseText));
  //         }
  //
  //         rej("Что-то пошло не так");
  //
  //       }
  //     })
  //   }
  //
  //   let x = getData('/menu.json').then((data)=>{
  //       console.log(data);
  //     data.forEach((item)=>{
  //       let a = document.createElement("a");
  //       a.addEventListener("click",selectPage);
  //       a.innerHTML = item.name;
  //       a.href=item.url;
  //       document.getElementById('menu').appendChild(a);
  //     })
  //
  //     return data[0].url.slice(1);
  //   }).then((data)=>{
  //
  //   })
  //   .catch((error)=>{
  //     document.getElementById('menu').innerHTML = error;
  //   })
  //
  //
  //   console.log(x);
  //
  //   function selectPage(url) {
  //
  //     setTimeout(()=>{
  //       getData(`/json/${location.hash.slice(1)}.json`).then((data)=>{
  //         let title = document.createElement('div');
  //             title.innerHTML = data.Title;
  //         let desc = document.createElement('div');
  //             desc.innerHTML = data.Desc;
  //             document.getElementById('app').innerHTML="";
  //             document.getElementById('app').appendChild(title);
  //             document.getElementById('app').appendChild(desc);
  //       }).catch((error)=>{
  //         document.getElementById('menu').innerHTML = error;
  //       })
  //     },60)
  //
  //   }


}
