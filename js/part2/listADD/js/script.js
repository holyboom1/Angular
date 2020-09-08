'use strict';
window.onload = function() {
    document.addEventListener("keydown", key);

    function randomInteger(min, max) {
        // получить случайное число от (min-0.5) до (max+0.5)
        let rand = min - 0.5 + Math.random() * (max - min + 1);
        return Math.round(rand);
    }
    function ce(name="div",text,event,fn){
        let x = document.createElement(name);
        if(text!=undefined){
            x.innerHTML=text;
        }

        if(event!=undefined){
            x.addEventListener(event,fn);
        }

        return x;
    }
    function addButtons (){
        let parent = ce("div");
        parent.className="buttons";
        let x = ce("span","add ","click",addLi);
        x.classList.add("button")
        let y = ce("span","Sort Up","click",sortUp);
        y.classList.add("button")
        let z=ce("span", `Sort down`, "click", sortDown);
        z.classList.add("button")
        parent.append(x);
        parent.append(y);
        parent.append(z)
        document.body.prepend(parent);
    }
    function init() {
        let ul=ce("ul");
        ul.id="ul";
        document.body.append(ul);
        addButtons();
    }

    function key(e) {
        console.log(e.which)
        if (e.which===38){
            sortUp();
        }
        if (e.which===40){
            sortDown();
        }
        if (e.which===107){
            addLi();
        }
        if(e.which===13){okFnModal()}
        if(e.which===8){closeWindow()}
        if (e.ctrlKey){

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
    }
    function addLi() {
        let li=ce('li',`${randomInteger(1000,9999)}`);
        let del=ce("img")
        del.setAttribute('src', "img/close.png");
        del.addEventListener("click", showModal);
        li.append(del);
        document.getElementById("ul").append(li);


    }
    function showModal() {
        document.getElementById("modalWindow").classList.toggle("show_modal_window")
        this.parentElement.className="active"
        let del= document.getElementsByClassName("active");
        let innerText=""
        for(let i=0; i<del.length;i++){
            innerText+=del[i].innerText
            if(i>0){
                innerText+=","
            }

        }
        document.getElementById("modalInText").innerText=innerText;



    }
    function delLi() {

        this.parentElement.remove()
    }
    function sortUp() {
        let li = document.getElementsByTagName('li');
        let arr=[];
        for(let i=0; i<li.length;i++){
            arr[i]=li[i].innerText
        }
        arr.sort()
        for(let i=0; i<li.length;i++){
            li[i].innerText=arr[i]
            let del=ce("img") //это мои кнопки удалеия строки
            del.setAttribute('src', "img/close.png");
            del.addEventListener("click", delLi);
            li[i].append(del)
        }
    }
    function sortDown() {
        let li = document.getElementsByTagName('li');
        let arr=[];
        for(let i=0; i<li.length;i++){
            arr[i]=li[i].innerText
        }
        arr.sort()
        arr.reverse()
        for(let i=0; i<li.length;i++){
            li[i].innerText=arr[i]
            let del=ce("img") //это мои кнопки удалеия строки
            del.setAttribute('src', "img/close.png");
            del.addEventListener("click", delLi);
            li[i].append(del)
        }
    }
    init();

}
