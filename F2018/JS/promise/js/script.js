'use strict';
window.onload = function () {
  var getData = function (url) {
    return new Promise((res,rej)=>{
      let xhr =  new XMLHttpRequest();

      xhr.open("GET",url,true);
      xhr.send();
      xhr.onload = function () {
          if(xhr.status==200){
            res(JSON.parse(xhr.responseText));
          }

          rej("Что-то пошло не так");

        }
      })
    }

    let x = getData('/menu.json').then((data)=>{
        console.log(data);
      data.forEach((item)=>{
        let a = document.createElement("a");
        a.addEventListener("click",selectPage);
        a.innerHTML = item.name;
        a.href=item.url;
        document.getElementById('menu').appendChild(a);
      })

      return data[0].url.slice(1);
    }).then((data)=>{
      
    })
    .catch((error)=>{
      document.getElementById('menu').innerHTML = error;
    })


    console.log(x);

    function selectPage(url) {

      setTimeout(()=>{
        getData(`/json/${location.hash.slice(1)}.json`).then((data)=>{
          let title = document.createElement('div');
              title.innerHTML = data.Title;
          let desc = document.createElement('div');
              desc.innerHTML = data.Desc;
              document.getElementById('app').innerHTML="";
              document.getElementById('app').appendChild(title);
              document.getElementById('app').appendChild(desc);
        }).catch((error)=>{
          document.getElementById('menu').innerHTML = error;
        })
      },60)

    }


}
