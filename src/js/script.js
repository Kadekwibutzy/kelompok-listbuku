// ambil data

import { generateElement, Icon } from "./utils.js";
import { createBook, getAllBooks, updateBook, DeleteBook } from "./api.js";

const formInput = document.getElementById("inputBook");
const formSearch = document.getElementById("searchBook");

const bookContainer = document.getElementById("book-container");

// const authorData = document.getElementById("author");
// const TahunPenerbitData = document.getElementById("tahunpenerbit");
// const semuaData = document.getElementById("Judul");
// const deskripsiData = document.getElementById("deskripsi");

// const form = document.getElementById("addBookForm");

const inputBookTitle = document.getElementById("inputBookTitle");
const inputBookAuthor = document.getElementById("inputBookAuthor");
const inputBookYear = document.getElementById("inputBookYear");
const inputBookSummary = document.getElementById("inputBookSummary");
const inputBookIsComplete = document.getElementById("inputBookIsComplete");

// -------------------------------------

async function handledeleteBook(id) {
  try {
    const result = await deleteQuestionById({ id });
    console.log('Data dari API:', questions);

    if (!result) return;

    if (result?.code === 200) {
      alert("Berhasil menghapus data");

      window.location.reload();
    }
  } catch (error) {
    console.error("Error ngirim Nih: ", {
      error,
    });
  }
}

document.addEventListener("DOMContentLoaded", () => {
  async function handleGetAllBooks() {
    try {
      const result = await getAllBooks();

      if (result?.length < 1) return alert("Data Kosong");

      result.forEach((book) => {
        // Buat pembungkus data buku
        const quizItem = generateElement({
          tag: "div",
          id: `quiz-${book.id}`,
          className: "quiz-item",
        });

        // Buat section kiri
        const sectionLeft = generateElement({
          tag: "div",
          className: "section-left",
        });

        const titleBook = generateElement({
          tag: "h4",
          id: "judulbuku",
          value: book.title,
        });

        const author = generateElement({
          tag: "p",
          id: "author",
          value: book.author,
        });

        const releaseYear = generateElement({
          tag: "p",
          id: "tahunpenerbit",
          value: book.published_at,
        });

        const description = generateElement({
          tag: "div",
          id: "tahunpenerbit",
          value: book.summary,
        });

        // Memasukan element titleBook, author, releaseYear ke dalam section left
        sectionLeft.append(...[titleBook, author, releaseYear, description]);

        // COntoh bikin gambar
        // const imageData = generateElement({
        //   tag: "img",
        //   src: book.uploaded_at,
        // });

        // Deskripsi buku
        const descriptionBook = generateElement({
          tag: "p",
          id: "deskripsibuku",
        });

        const buttonDelete = generateElement({
          tag: "button",
          id: "button-delete",
          className: "btn btn-delete",
          elementHTML: Icon.delete,
        });
  
        // Ketika tombol delete di klik maka akan menjalankan fungsi handleDeleteQuestion
        buttonDelete.addEventListener("click", async (e) => {
          e.preventDefault();
  
          handleDeleteBook(question.id);
        });
  
        // Sekarang kita masukan element button edit dan delete ke dalam section kanan
        sectionLeft.append(...[buttonDelete]);

        // Memasukan element sectionLeft, descriptionBook ke dalam quizItem
        quizItem.append(...[sectionLeft, descriptionBook]);

        bookContainer.append(quizItem);
      });

      console.log({ result });
    } catch (error) {
      console.error("Error Nih: ", {
        error,
      });
    }
  }

  handleGetAllBooks();

  async function handleAddBook(payload) {
    try {
      /**
       * Kita akan panggil fungsi createQuestion yang sudah kita buat di file `api.js`
       * Lalu kita akan kirim payload ke dalam fungsi tersebut
       */
      const result = await createBook({ payload: payload });

      /**
       * Kita lakukan pengecekan jika ketika respon kode yang diberikan itu 201 (Created)
       * Maka munculkan alert "Berhasil menambahkan data", kosongkan inputan dan reload halaman
       */

      if (result?.code === 201) {
        alert("Berhasil menambahkan data");

        inputBookTitle.value = "";
        inputBookAuthor.value = "";
        inputBookYear.value = "";
        inputBookSummary.value = "";
        inputBookIsComplete.value = false;
        
        window.location.reload();
      }
    } catch (error) {
      console.error("Error ngirim Nih: ", {
        error,
      });
    }
  }

  

  // SUBMIT DATA
  formInput.addEventListener("submit", (e) => {
    e.preventDefault();

    const payload = {
      title: inputBookTitle.value,
      author: inputBookAuthor.value,
      summary: inputBookSummary.value,
      published_at: new Date(),
      is_read: inputBookIsComplete.value,
      url: "...",
    };

    handleAddBook(payload);

    // alert("sukses");
  });

  // FITUR SEARCH
  formSearch.addEventListener("submit", (e) => {
    e.preventDefault();

    const inputSearch = document.getElementById("searchBookTitle").value;
    bookSearch(inputSearch);

    
  });
});

const buttonDelete = generateElement({
  tag: "button",
  id: "button-delete",
  className: "btn btn-delete",
  // elementHTML: Icon.delete,
});

// Ketika tombol delete di klik maka akan menjalankan fungsi handleDeleteQuestion
buttonDelete.addEventListener("click", async (e) => {
  e.preventDefault();

  handleDelteBook(question.id);
});

// document.addEventListener("ondataloaded", () => {
//   renderFromBooks();
// });

// const buttonTambah = document.querySelector("#buttonTambah");
// buttonTambah.addEventListener("click", () => {
//   alert("hai");
// });
