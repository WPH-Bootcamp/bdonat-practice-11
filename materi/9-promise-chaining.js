function doAPromise() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("1. doA (Promise) Selesai");
      resolve("Hasil A");
    }, 1000);
  });
}
function doBPromise(dataA) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`2. doB (Promise) Selesai (menerima ${dataA})`);
      resolve("Hasil B");
    }, 1000);
  });
}
function doCPromise(dataB) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`3. doC (Promise) Selesai (menerima ${dataB})`);
      resolve("Hasil C");
    }, 1000);
  });
}
function doDPromise(dataC) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`2. doD (Promise) Selesai (menerima ${dataC})`);
      resolve("Hasil D");
    }, 1000);
  });
}

// console.log("Mulai (Promise Chaining)...");
// doAPromise()
//   .then((resultA) => doBPromise(resultA))
//   .then((resultB) => doCPromise(resultB))
//   .then((resultC) => doDPromise(resultC))
//   .then((resultD) => console.log(resultD))
//   .catch((error) => console.error(error.message));

// REAL CASE
const BASE_API = "https://jsonplaceholder.typicode.com/posts/1";
fetch(BASE_API)
  .then((response) => response.json())
  .then((data1) => {
    console.log(data1);
    let data2 = fetch("https://jsonplaceholder.typicode.com/posts/2");
    return data2;
  })
  .then((response) => response.json())
  .then((data2) => {
    console.log("Data post dengan id 2 : ", data2);
  })
  .then((response) => response.json())
  .then((data3) => console.log(data3))
  .catch((err) => console.error(err))
  .finally(() =>
    setTimeout(() => {
      console.log("Clean the things up");
    }, 1000)
  );

// CONTOH UNTUK THROW NEW ERROR PROMISE CHAINING
function TestError() {
  return new Promise((resolve, reject) => {
    throw new Error("BUAT ERROR SENDIRI BOSS");
  });
}

TestError()
  .catch((error) => {
    console.log("Caught an error, but can't handle it : " + error);
    throw error;
  })
  .then(() => console.log("This won't run because the error was rethrown"))
  .catch((error) => console.log("handled again : " + error));
