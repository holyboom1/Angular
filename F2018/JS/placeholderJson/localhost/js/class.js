'use strict'
window.onload = ()=> {
  class PlaceHolderJSON{
    constructor(id){
      this.posts = [];
      this.app = document.getElementById(id);
    }
    //
    getJson(url){
      return fetch(url).then((response)=>response.json())
    }
    //
    createElement(obj, eventType, eventFun){
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
      this.app.appendChild(parent);
      if(eventType!= undefined){
        title.addEventListener(eventType,eventFun);
      }

      title.setAttribute("data-id", obj.id);
    }
    //
    createPost(fun){
      console.log(this.posts);
      this.posts.forEach((item)=>{
        this.createElement(item, 'click', fun!=undefined?fun:null);

      })

    }

    clickPost(){
      
      //console.log(this.parentNode);
    }
  }

  //

  function getItem() {
    console.log(this.getAttribute("data-id"));
  }

  let jp = new PlaceHolderJSON('app');
  jp.getJson('https://jsonplaceholder.typicode.com/posts').then((json)=> {
    jp.posts = json;
    jp.createPost(jp.clickPost);
  })

  //console.log(jp.clickPost);

}
