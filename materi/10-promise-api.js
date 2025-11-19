// 1. Promise.all
const ayam = new Promise((resolve) =>
  setTimeout(() => {
    resolve("Ayam ✅");
  }, 2000)
);
const esTeh = new Promise((resolve) =>
  setTimeout(() => {
    resolve("Es Teh ✅");
  }, 1000)
);
const sambal = new Promise((resolve) =>
  setTimeout(() => {
    resolve("Sambal ✅");
  }, 1500)
);

Promise.all([ayam, esTeh, sambal])
  .then((result) => {
    console.log(result);
    console.log("Makanan semua sudah siapp!!");
  })
  .catch((error) => console.log(error));

// 2. Promise.allSettled
const barang1 = Promise.resolve("Barang 1 Terkirim ✅");
const barang2 = Promise.resolve("Barang 2 Terkirim ✅");
const barang3 = Promise.reject("Barang 3 Terkirim ❌");

Promise.allSettled([barang1, barang2, barang3])
  .then((result) => {
    console.log(result);
  })
  .catch((error) => console.log(error));

// 3. Promise.race -> Siapa yang paling cepat dia yang dapat
const cepat = new Promise((resolve) =>
  setTimeout(() => {
    resolve("Pelari 1 😇");
  }, 500)
);
const lambat = new Promise((resolve) =>
  setTimeout(() => {
    resolve("Pelari 2 😭");
  }, 2000)
);

Promise.race([cepat, lambat]).then((result) =>
  console.log("Pemenang : " + result)
);

// 4. Promise.any
const teman1 = Promise.reject("Teman 1 : Tidak bisa ❌");
// const teman2 = new Promise((resolve) =>
//   setTimeout(() => {
//     resolve("Teman 2 : Aku jemputtt... 🚘");
//   }, 1500)
// );
const teman2 = Promise.reject("Teman 2 : Lagi dimarahin orang tua 😤");
const teman3 = Promise.reject("Teman 3 : Masih bobo 😴");
Promise.any([teman1, teman2, teman3])
  .then((result) => console.log(result))
  .catch((error) => console.error(error));

// 5. Promise.resolve
const berhasil = Promise.resolve("Berhasil, berhasil, horee...");
berhasil.then((result) => console.log(result));

// 6. Promise.reject
const gagal = Promise.reject("Yahh gagall lagii....");
gagal.catch((error) => console.error(error));
