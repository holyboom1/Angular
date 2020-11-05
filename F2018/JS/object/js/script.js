'use strict';
window.onload = function () {
  var obj ={
    name : "Dima",
    age: 28,
    show : function () {
      return this.name + " " + this.age;
    }
  }
  var newObj = Object.assign({},obj);
  //var newObj = obj;
  console.log(obj);
  console.log(obj.show());
  console.log(newObj);
  newObj.age = 50;
  console.log(newObj.show());
  console.log(obj.show());

  function User(name=null,age=null) {
    if(name===undefined) {
      //
    }
    this.name = name;
    this.age = age;
  }

  User.prototype.show = function () {
      return this.name + " " + this.age;
  }

  User.prototype.setAge = function (age=0) {
      if(!isNaN(age)) {
        let old = this.age;
        this.age = age;
        return `значение изменино с ${old} на ${this.age}`
      }
      return `Беда`
  }

  User.prototype.setAll = function (data) {
        this.name = data.name;
        this.age = data.age;
        return true

  }

  var param = {
    name : 660,
    age :50
  }
  var user = new User("test",40);
  console.log(user);
  console.log(user.show());
  console.log(user.setAge("asdasd"));
  console.log(user.setAll(param));
  console.log(user.show());
}
