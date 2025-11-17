"use strict";
/*
    PATTERN :
    try{
        // Code here
    }catch(error){
        // Tangkap error
    }
*/

// Contoh
try {
  nonExistingFunction();
} catch (error) {
  console.log("Error : ", error.message);
}

// Contoh real case
let json = '{"name": "Ucup"}';

try {
  let user = JSON.parse(json);
  console.log(user.name);

  //Membuat error sendiri
  if (!user.name) {
    throw new Error("GAADA NICH NAME NYA");
  }
} catch (err) {
  console.log("JSON TIDAK VALID, TOLONG CEK FORMAT : ", err.message);
} finally {
  // Finally biasa digunakan untuk clear cache, clearTimeout, dll ...
  console.log("Jalan terus boss, error ga error");
}
