export default class User {
  constructor(name,age) {
    this.age = age;
    this.name = name;
  }

  getInfo() {
    return this.name + this.age;
  }
}
