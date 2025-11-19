// FETCH (OBJECT PROMISE) DATA : https://jsonplaceholder.typicode.com/posts/1
const BASE_API = "https://jsonplaceholder.typicode.com/posts";

async function getAllPost() {
  try {
    const response = await fetch(BASE_API);
    if (!response.ok) {
      throw new Error("API ERROR NIH");
    }
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}
getAllPost();

async function getPostById(id) {
  try {
    const response = await fetch(`${BASE_API}/${id}`);
    if (!response.ok) {
      throw new Error("Gagal memuat API :", BASE_API);
    }

    const data = await response.json();
    console.log("Data berhasil di ambil :", data);
  } catch (error) {
    console.log("Terjadi error :", error);
  }
}
getPostById(20);
