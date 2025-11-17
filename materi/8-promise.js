/*
    PATTERN :
    let promise = new Promise((resolve, reject) => {
        // Code here
    })
*/
// Contoh
let promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Data berhasil diambil");
  }, 2000);
});
promise
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {
    console.log("Jalan terossss");
  });

// Contoh Program
function buatPesananBurger() {
  console.log("Kasir : Pesanan diterima, dapur sedang proses...");
  const janjiDapur = new Promise((resolve, reject) => {
    setTimeout(() => {
      const burgerTersedia = Math.random() > 0.3;
      if (burgerTersedia) {
        resolve("Burger spesial anda sudah jadi!");
      } else {
        reject(new Error("Maaf, daging burger abisss...."));
      }
    }, 2000);
  });

  return janjiDapur;
}

console.log("Pelanggan: saya mau pesan satu burger spesial");
const buzzeer = buatPesananBurger();

console.log("Pelanggan : (Menunggu sambil scrolling tiktok)");

buzzeer
  .then((hasilMasakan) => {
    console.log(`Pelanggan : Yeayyy! ${hasilMasakan}`);
  })
  .catch((alasanGagal) => {
    console.log(`Pelanggan : Yahhh... ${alasanGagal.message}`);
  })
  .finally(() => {
    console.log("Pelanggan : (Meninggalkan konter)");
  });
