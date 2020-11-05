'use strict';
window.onload = function () {
  //$("div").css("color","red").css("background","green");
  let x = $("div");
  console.log(x.text(),x.css("color"));
  x.css({
    color : "red",
    fontSize: "18px",
    margin :"10px 20px 30px 40px"
  }).text("JS");

console.log(x.text(),x.css("color"));
  // if(x.length>=2) {
  //   x.text("привет");
  //   //x.html("Привет");
  // }

  x.addClass("active"); //classList.add
  x.removeClass("delete"); //classList.remove
  x.toggleClass("my") //classList.toggle

  x.attr({
    "title":"test js",
    "data-id" : "11"
  });

  x.attr("class", function (i,val) {
    console.log(i,val);
    if(val.indexOf("super")!=-1) {
      return "white"
    }

    else {
      return "blue"
    }
    //this -> vanilla
    //$(this) -> jq
    //$(this).css("color","green");
  })



  /* let div = document.querySelectorAll("div")
   for (var i = 0; i < div.length; i++) {
    div[i].style.color="red";
  }*/
  //$("div>p").метод();
  //$(".div.p > ul li:last-child a").метод();
}
