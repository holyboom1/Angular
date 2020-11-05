'use strict';
window.onload = function () {
  var data = [];
  class User {
    constructor(obj) {
      this.name = obj.name;
      this.login = obj.login;
      this.date  =  obj.date;
      this.pass = obj.pass;
    }

    log(debug=true){
      if(debug) {
        return this
      }
      else {
        let res = "";
        for (let key in this) {
          res+=`${key} -- ${this[key]} \n`;
        }

        return  res;
      }

    }

    updateData(obj){
      for( let key in obj) {
        if(key in this) {
          this[key] = obj[key];
        }
      }

      return this
    }

    get password (){
      return this.pass;
    }

    set password (x){
      return this.pass=x;
    }


  }

  class Admin extends User {
      constructor(obj) {
        super(obj);
        this.superPower = true;

      }

      addUser(obj){
          switch(obj.type){
              case 0 :
                data.push(new Admin(obj));
                break;
              case 1 :
                data.push(new User(obj));
                break;
              default : return false
          }
      }

      log() {
        var x =super.log(false)
        return x+"gggggggg";
      }
  }

  let user = new User({
    login :"Test",
    pass :"test123123",
    name :"Vika",
    date :20,
  })

  let admin =  new Admin({
    login :"Admin",
    pass :"Admin123456",
    name :"Admin",
    date :0,
  })

  console.log(admin.log(false));
  admin.addUser(
    {
      login :"1",
      pass :"1",
      name :"1",
      date :1,
      type: 0
    }
  )

  admin.addUser(
    {
      login :"2",
      pass :"2",
      name :"2",
      date :2,
      type: 1
    }
  )

  admin.addUser(
    {
      login :"2",
      pass :"2",
      name :"2",
      date :2,
      type: 4
    }
  )

  console.log(data);

/*
  console.log(user.log(true));

  console.log(user.updateData({
    name:"testssss",
    test : 20,
    date : 222222
  }));

  console.log(user.password);
  console.log(user.password=true);
  console.log(user.log());
  */
}
