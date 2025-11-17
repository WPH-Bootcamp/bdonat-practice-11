// Native Prototypes
let person = {
  nama: "Ucup",
  greet() {
    console.log(`Hello, my name is ${this.nama}`);
  },
};

let anotherPerson = Object.create(person);
anotherPerson.nama = "Rudy";

person.greet();
anotherPerson.greet();

console.log(anotherPerson.__proto__ === person);

/*
Native Prototypes :
    Array → object
    Function → object
    String → object
    Number → object
    Boolean → object
    Date → object
    RegExp → object
    Error → object
*/

// Array
let arr = [1, 2, 3];
arr.push(4);
console.log(arr);

// Number
let angka = 10;
let angkaString = angka.toString();
console.log(typeof angkaString === typeof "");
console.log(angka.__proto__);
