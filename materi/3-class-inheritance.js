"use strict";
class Animal {
  constructor(nama) {
    this.nama = nama;
  }

  voiced() {
    console.log(`${this.nama} make a voice`);
  }
}

class Cat extends Animal {
  constructor(nama, color) {
    super(nama); //Wajib
    this.color = color;
  }

  meow() {
    super.voiced();
    console.log(`${this.nama} ${this.color} is meowing!`);
  }
}
let siOren = new Cat("Kucing", "Oren");
siOren.voiced();
siOren.meow();
let siBiru = new Cat("Kucing", "Biru");
siBiru.meow();

class Dog extends Animal {
  bark() {
    console.log(`${this.nama} is barking!`);
  }
}
let blacky = new Dog("Blacky");
blacky.voiced();
blacky.bark();
