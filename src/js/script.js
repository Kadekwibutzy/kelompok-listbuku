// ambil data
import { generateElement, getAllBooks } from "./api.js";

const semuaData = document.getElementById("semuaData");

async function getSemuaData() {
  const dataDariApi = await getAllBooks();
  console.log(dataDariApi);
  // looping
  dataDariApi.forEach((item) => {
    console.log(item);
    // memunculkan ke index.html  -> ctrl + space
    const new_item = generateElement({
      tag: "div",
      value: item.summary,
      className: "card p-2",
    });

    // menggabungkan
    semuaData.append(...[new_item]);
  });
}

// panggil fungsi
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
