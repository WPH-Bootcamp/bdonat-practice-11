// async...await
function boilWater() {
  return new Promise((resolve) =>
    setTimeout(() => {
      resolve("Air sudah mendidih 🔥");
    }, 1000)
  );
}

async function makeTea() {
  console.log("Sedang/Memanaskan air...");

  const result = await boilWater();
  console.log(result);

  console.log("sekarang masukkan teh...");
}

makeTea();

const masakMie = async () => {
  console.log("Sedang/Memanaskan air...");

  const result = await boilWater();
  console.log(result);

  console.log("Sekarang masukkan mie...");
};
masakMie();
