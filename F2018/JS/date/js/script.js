'use strict';
window.onload = function () {
  /*
    console.log(date);
    console.log(date.getFullYear());
    console.log(date.getDate());
    console.log(date.getDay());

    console.log(date.setDate(date.getDate()+15));
    console.log(date.getDate());*/
    let date1 = new Date(2020,10,20,10,50,25);
    console.log(date1, date1.getTime());

    setInterval(()=>{
      let date =  new Date();

    text.innerHTML = date.toLocaleString('de-DE',{
        //year: 'numeric',
        //month: 'long',
      //day: 'numeric',
        //weekday: 'long',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric'
      });
    },1000)
}
