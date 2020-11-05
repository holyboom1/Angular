'use strict';

 function generateTable() {
   let table = createElementDOM("table");
   let n = randomNumber(3,5);

   for (var i = 0; i < n; i++) {
     let tr = createElementDOM("tr");
     for (var j = 0; j < n+1; j++) {


       if(j==0) {
          var td = createElementDOM("td", "Х","removeTr");
          td.onclick = removeTr;
        }
        else {
          var td = createElementDOM("td", randomNumber(1,10));
        }
       tr.appendChild(td);
     }
     table.appendChild(tr);
   }
   let button1 = createElementDOM("div","Строка");
   let button2 = createElementDOM("div","Столбик");
   button1.onclick = addTr;
   button2.onclick = addTd;
   document.body.appendChild(button1);
   document.body.appendChild(button2);
   document.body.appendChild(table);

   minMax();
    checkMainD();

 }


generateTable();

function minMax() {
  let td = document.querySelectorAll("table td");
  let max=+td[1].innerHTML;
  let min=max;
  for (var i = 0; i < td.length; i++) {
    if(+td[i].innerHTML>max) {
      max=+td[i].innerHTML;
    }
    else if (+td[i].innerHTML<min) {
      min=+td[i].innerHTML;
    }
  }

  setMinMax(min,max,td);

}

function setMinMax(min,max,td) {
  let minActive =  document.querySelectorAll(".min");
  let maxActive =  document.querySelectorAll(".max");
  for (var i = 0; i < minActive.length; i++) {
    minActive[i].removeAttribute("class");
  }

  for (var i = 0; i < maxActive.length; i++) {
    maxActive[i].removeAttribute("class");
  }

  for (var i = 0; i < td.length; i++) {
    if(+td[i].innerHTML==min) {
      td[i].className="min"
    }
    else if (+td[i].innerHTML==max) {
      td[i].className="max"
    }
  }

}

function addTd() {
  let tr = document.querySelectorAll("table tr");

  for (var i = 0; i < tr.length; i++) {
    tr[i].appendChild(createElementDOM("td",randomNumber(1,10)))
  }

  minMax()
  checkMainD()



}

function addTr() {

    let clone = document.querySelector("table tr").cloneNode(true);

    for (var i = 0; i < clone.children.length; i++) {

      clone.children[i].innerHTML = randomNumber(1,10);
      if(i==0) {
          clone.children[i].onclick = removeTr;
          clone.children[i].innerHTML="Х"
      }
    }

    document.querySelector("table").appendChild(clone);
    minMax();
    checkMainD();
}

function removeTr() {
  this.parentNode.remove();
  minMax()
  checkMainD();
}

function checkMainD() {
  let tr = document.querySelectorAll("tr");
  if(tr.length == tr[0].children.length-1){
    for (var i = 0; i < tr.length; i++) {
      tr[i].children[i+1].className="activeD";
    }
  }

  else {
    let active = document.querySelectorAll(".activeD");
    if(active.length!=0){
      for (var i = 0; i < active.length; i++) {
        active[i].removeAttribute("class");
      }
    }
  }
}

function randomNumber(min=1,max=10) {
   return Math.floor(min + Math.random() * (max + 1 - min));

}

 function createElementDOM(name="div",text="",classForElement) {
   let elem = document.createElement(name);
   if(text!=""){
     elem.innerHTML = text;
   }

   if(classForElement!=undefined){
     elem.className = classForElement
   }

   return elem;
 }


function tbClick() {
  if(this.hasAttribute('class')){
    this.removeAttribute('class');
    sum-=+this.innerHTML; //sum = sum +this.innerHTML
    rez.innerHTML = `Сумма = ${sum}`;
  }
  else {
    this.setAttribute('class','active');
    sum+=+this.innerHTML; //sum = sum +this.innerHTML
    rez.innerHTML = `Сумма = ${sum}`;
  }
}



function galleryRun() {
  big.setAttribute('src',this.getAttribute('src'));
}
