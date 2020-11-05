'use strict';


add.onclick = function () {
  let str = prompt("Введите срочку","   Привет мир js. Мы смотрим String   ")
  let newStr = str.trim();

  rez.innerHTML+=`<ul>`;
  rez.innerHTML+= `<li>Исх строка : ${str} -> ${str.length} </li>`;
  rez.innerHTML+= `<li>Новая строка : ${newStr} -> ${newStr.length}</li>`;
  rez.innerHTML+= `<li>Upper : ${newStr.toUpperCase()}</li>`;
  rez.innerHTML+= `<li>Lower : ${newStr.toLowerCase()}</li>`;
  rez.innerHTML+= `<li>indexOf : ${newStr.indexOf("js")}</li>`;
  rez.innerHTML+= `<li>Includes : ${newStr.includes("js")}</li>`;
  rez.innerHTML+= `<li>Slice : ${newStr.slice(5)}</li>`;
  rez.innerHTML+= `<li>Slice : ${newStr.substr(5,5)}</li>`;
  rez.innerHTML+= `<li>Slice : ${newStr.repeat(2)}</li>`;
  rez.innerHTML+=`</ul>`;

  console.log(newStr.split(''));
}
