async function getReviewInfo() {
  try {
    const response = await fetch("./reviews.json", {
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log(response);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching review data:", error);
    throw error; // Re-lanzar el error para que pueda ser manejado por el llamador si es necesario
  }
}

export default getReviewInfo;
