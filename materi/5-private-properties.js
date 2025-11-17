// User Password
class User {
  #password;

  constructor(username, password) {
    this.username = username;
    this.#password = password;
  }

  seeMyUsername() {
    console.log(`My username : ${this.username}`);
  }
  seeMyPassword() {
    console.log(`My password : ${this.#password}`);
  }

  ubahPassword() {}
}

let ucup = new User("ucup123", "123");
ucup.seeMyUsername();
ucup.seeMyPassword();

ucup.username = "123ucup";
ucup.seeMyUsername();

// ucup.#password = "456";
// ucup.seeMyPassword();

// Bank Account
class BankAccount {
  #balance = 0;

  deposit(amount) {
    if (amount > 0) this.#balance += amount;
  }

  withdraw(amount) {
    if (amount <= this.#balance) {
      this.#balance -= amount;
    } else {
      console.log("Saldo tidak cukup");
    }
  }

  getBalance() {
    return this.#balance;
  }
}

let dicky = new BankAccount();
dicky.deposit(20_000);
console.log(dicky.getBalance());
dicky.withdraw(30_000);
console.log(dicky.getBalance());
dicky.withdraw(10_000);
console.log(dicky.getBalance());
dicky.deposit(110_200);
console.log(dicky.getBalance());
