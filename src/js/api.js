const BASE_URL = "http://128.199.167.159/v1/idc/book";

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

export async function getQuestions() {
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

export async function createQuestion({ payload = undefined }) {
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

export async function updateQuestionById({ id = 1, payload = undefined }) {
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

export async function deleteQuestionById({ id = 1 }) {
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
