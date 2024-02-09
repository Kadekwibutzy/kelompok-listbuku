

const BASE_URL = "http://128.199.167.159/v1/idc";

/** ** 13 Januari 2024 **
 * File: api.js
 *
 * Di file ini kita menaruh semua fungsi yang berhubungan dengan API
 * baik itu untuk mengambil data dari API atau mengirim data ke API
 * bahkan untuk update data dan delete data ke API
 */

export async function incompleteBookshelfList({ id = 10 }) {
  try {
    const response = await fetch(`${BASE_URL}/book/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const result = await response.json();

    return result?.data;
  } catch (error) {
    console.error("Error Nih: ", {
      error,
    });
  }
}

export async function getAllBooks() {
  try {
    const response = await fetch(`${BASE_URL}/books`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const result = await response.json();

    return result?.data;
  } catch (error) {
    console.error("Error Nih: ", {
      error,
    });
  }
}

export async function getBooks() {
  try {
    const response = await fetch(`${BASE_URL}/api/quizzes`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const result = await response.json();
    return result?.data;
  } catch (error) {
    console.error("Error Nih: ", {
      error,
    });
  }
}

export async function createBook({ payload = undefined }) {
  try {
    const response = await fetch(`${BASE_URL}/api/quiz`, {
      method: "POST",
      body: JSON.stringify(payload),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const result = await response.json();
    return result;
  } catch (error) {
    console.error("Error Nih: ", {
      error,
    });
  }
}

export async function updateBook({ id = 1, payload = undefined }) {
  try {
    const response = await fetch(`${BASE_URL}/api/quiz/${id}/update`, {
      method: "PUT",
      body: JSON.stringify(payload),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const result = await response.json();
    return result;
  } catch (error) {
    console.error("Error Nih: ", {
      error,
    });
  }
}

export async function deletebook({ id = 1 }) {
  try {
    const response = await fetch(`${BASE_URL}/api/quiz/${id}/delete`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const result = await response.json();
    return result;
  } catch (error) {
    console.error("Error Nih: ", {
      error,
    });
  }
}

export function generateElement({
  tag,
  id,
  className,
  value,
  href,
  elementHTML,
  src,
}) {
  const element = document.createElement(tag);

  if (id) element.id = id;
  if (className) element.className = className;
  if (value) element.innerText = value;
  if (elementHTML) element.innerHTML = elementHTML;

  if (tag === "a") element.href = href;
  if (tag === "img") element.src = src;

  return element;
}
