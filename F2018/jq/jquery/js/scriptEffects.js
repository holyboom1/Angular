'use strict';
$(document).ready(function () {
  // document.getElementById("run").onclick = function () {
  //
  // }

  //http://jquery.page2page.ru

  //http://jqueryui.com/

  $("ul li").click(function () {
    $("ul li").removeClass("active");
    $(this).addClass("active");
    let elem =$("<div>").text("Привет").css("color","green");
    elem.appendTo($(this));
  })

  $("#run").click(function () {
    // $("#text").slideToggle(1500,function () {
    //     console.log(2222);
    // });

    //.slideUp()
    //.slideDown()

    // $("#text").toggle(function () {
    //     console.log(2222);
    // });

    //.hide()
    //.show()

    $("#text").fadeToggle(150,function () {
        console.log(2222);
    });
  })
})
