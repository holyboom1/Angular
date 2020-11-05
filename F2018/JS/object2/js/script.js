'use strict';
window.onload = function () {

  function Table(params) {
    this.col = params.col;
    this.row = params.row;
    this.render = params.render;
  }

  Table.prototype.random = function (min=1,max=10) {
    var rand = min + Math.random() * (max + 1 - min);
    rand = Math.floor(rand);
    return rand;
  }

  Table.prototype.init = function () {
      let table = document.createElement("table");
      for (var i = 0; i < this.row; i++) {
        let tr = document.createElement("tr");
        for (var j = 0; j < this.col; j++) {
          let td = document.createElement("td");
          td.innerHTML = this.random();
          tr.appendChild(td);
        }

        table.appendChild(tr);
      }

      //this.myElem=table

      document.getElementById(this.render).appendChild(table);
  }

  Table.prototype.addTr = function () {
    let table = document.getElementById(this.render).querySelector("table");
    let clone = table.children[0].cloneNode(true);
    for (var i = 0; i < clone.children.length; i++) {
      clone.children[i].innerHTML = this.random(3,6);
    }

    table.appendChild(clone);

  }

  Table.prototype.removeTr = function (id) {
      if(!isNaN(age)) {
        let old = this.age;
        this.age = age;
        return `значение изменино с ${old} на ${this.age}`
      }
      return `Беда`
  }

  let table = new Table({
    col:3,
    row:3,
    render:"root"
  });

  table.init();
  table.addTr();


}
