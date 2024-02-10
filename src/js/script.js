
// ambil data
import { generateElement, getAllBooks, getBooks, createBook, updateBook, deletebook } from "./api.js";

const semuaData = document.getElementById("judulbuku");
const deskripsiData = document.getElementById("deskripsibuku");
const authorData = document.getElementById("author");
const TahunPenerbitData = document.getElementById("tahunpenerbit");

async function getSemuaData() {
  const dataDariApi = await getAllBooks();
  console.log("Data dari API:", dataDariApi);
  // looping
  dataDariApi.forEach((item) => {
    // memunculkan ke index.html
    const newJudul = generateElement({
      tag: "div",
      value: item.title,
    });

    const newDeskripsi = generateElement({
      tag: "div",
      value: item.summary,
    });

    const newAuthor = generateElement({
      tag: "div",
      value: item.author,
    })

    const newTahunPenerbit = generateElement({
      tag: "div",
      value: item.published_at,
    })

    // menggabungkan
    semuaData.append(...[newJudul]);
    deskripsiData.append(...[newDeskripsi]);
    authorData.append(...[newAuthor]);
    TahunPenerbitData.append(...[newTahunPenerbit]);
  });
}

// Panggil fungsi untuk menampilkan data
getSemuaData();

// -------------------------------------
import { generateElement, getAllBooks } from "./api.js";

const semuaData = document.getElementById("Judul");
const deskripsiData = document.getElementById("Deskripsi");

async function getSemuaData() {
  const dataDariApi = await getAllBooks();
  console.log("Data dari API:", dataDariApi);

  // looping
  dataDariApi.forEach((item) => {
    // memunculkan ke index.html
    const newJudul = generateElement({
      tag: "div",
      value: item.title,
    });

    const newDeskripsi = generateElement({
      tag: "div",
      value: item.summary,
      className: "card p-2",
    });

    // menggabungkan
    semuaData.append(...[newJudul]);
    deskripsiData.append(...[newDeskripsi]);
  });
}

// Panggil fungsi untuk menampilkan data
getSemuaData();

// -------------------------------------
document.addEventListener("DOMContentLoaded", () => {
  const formInput = document.getElementById("inputBook");
  const formSearch = document.getElementById("searchBook");

  formInput.addEventListener("submit", (e) => {
    e.preventDefault();
    addBook();

    document.getElementById("inputBookTitle").value = "";
    document.getElementById("inputBookAuthor").value = "";
    document.getElementById("inputBookYear").value = "";
    document.getElementById("inputBookIsComplete").checked = false;
  });

  formSearch.addEventListener("submit", (e) => {
    e.preventDefault();

    const inputSearch = document.getElementById("searchBookTitle").value;
    bookSearch(inputSearch);
  });

  if (isStorageAvailable()) {
    loadDataFromStorage();
  }
});

document.addEventListener("ondataloaded", () => {
  renderFromBooks();
});
