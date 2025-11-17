class Alien {}
class Human {}
class Programmer extends Human {}

let Dicky = new Programmer();

console.log(Dicky instanceof Programmer);
console.log(Dicky instanceof Human);
console.log(Dicky instanceof Alien);
