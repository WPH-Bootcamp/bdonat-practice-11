// Class -> template / blueprint (cetakan) untuk membuat banyak object dengan struktur dan perilaku yang sama
/*
    PATTERN :
    class NamaClass{
        // Code Here
    }

    function namaFunction(){
        // Code Here
    }

    Notes : class dan function memiliki perbedaan case 
    Function -> camelCase : isAdminUser
    Class -> PascalCase : IsAdminUser
*/

// Syntax Dasar
class NamaClass {
  constructor(param1, param2) {
    this.param1 = param1;
    this.param2 = param2;
  }

  method1() {}
  method2() {}
}

const objBaru = new NamaClass("nilai1", "nilai2");
objBaru.method1();
objBaru.method2();

// Contoh
class Car {
  constructor(modelName, brand, year) {
    this.name = modelName;
    this.brand = brand;
    this.year = year;
  }

  getDetails() {
    return `This is a ${this.brand} ${this.name} from ${this.year}`;
  }
}

const mustang = new Car("Mustang", "Ford", 1989);
console.log(mustang.getDetails());

// Perbandingan Function dengan Class
function UserFunction(name, age) {
  this.name = name;
  this.age = age;
}
UserFunction.prototype.sayHi = function sayHi() {
  console.log(`Hi, i'm ${this.name} and i'm ${this.age} years old`);
};
let ucup = new UserFunction("Ucup", 23);
ucup.sayHi();
console.log(ucup.sayHi);

class UserClass {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  sayHi() {
    console.log(`Hi, i'm ${this.name} and i'm ${this.age} years old`);
  }
}
let renday = new UserClass("Renday", 32);
renday.sayHi();
console.log(renday.sayHi);
