class NamaClass {
  static staticProperty = "Ini property statis";

  static staticMethod() {
    return "ini metode statis";
  }

  constructor(property) {
    this.property = property;
  }

  methodInstance() {
    console.log("Ini metode instance " + this.property);
  }
}

console.log(NamaClass.staticProperty);

let obj = new NamaClass("nilai");
obj.methodInstance();
console.log(obj.property);
console.log(obj.staticProperty);

// Contoh Menghitung Jumlah User yang Dibuat
class User {
  static totalUsers = 0;
  static userOnline() {
    return "the users are online";
  }

  constructor(name) {
    this.name = name;
    User.totalUsers++;
  }
  sayHi() {
    console.log(`Hi, user : ${this.name}`);
  }
}

let alice = new User("Alice");
alice.sayHi();
let bob = new User("Bob");
bob.sayHi();
let charlie = new User("Charlie");
charlie.sayHi();
let ucup = new User("Ucup");
ucup.sayHi();
console.log(User.totalUsers);
console.log(User.userOnline());
