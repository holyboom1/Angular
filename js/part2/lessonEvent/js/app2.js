window.onload = function(){

    document.addEventListener("keydown",key);
    let left = 0;
    let top =0;
    var maxWidth = document.body.offsetWidth;
    var maxHeigth = document.body.offsetHeight;

    }

    function key(e) {

      if(e.which===39 && maxWidth != left) {
            let step =0.1;
            let x = setInterval(function () {
                if(step<50) {
                    step+=0.5
                    box.style.left=`${step+left}px`;
                }
                else {
                    clearInterval(x);
                    left+=50
                }
            },1)
      }

    }

    // function addElem() {
    //     let elem = document.createElement("p");
    //     elem.innerHTML="asdasda222222222";
    //     document.body.append(elem);
    //
    //
    // document.body.onclick = function (e) {
    //     if(e.target.tagName=="P") {
    //         runSomeFn(222,asda,23123,)
    //     }
    // }
    //
    // let z = document.querySelectorAll("p");
    // document.querySelectorAll("p").forEach((item,i)=>{
    //     item.addEventListener("click",()=>{
    //         console.log(22222);
    //     })
    // })
