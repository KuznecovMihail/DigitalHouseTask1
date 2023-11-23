function submitForm(event) {
  event.preventDefault();

  const form = document.getElementById("feedbackForm");
  const formData = new FormData(form);

  fetch("http://localhost:3000/api/submit", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Origin: "http://127.0.0.1:5500/",
    },
    body: JSON.stringify(Object.fromEntries(formData)),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Error status");
      }
      return response.json();
    })
    .then((data) => {
      alert("Форма успешно отправлена!");
      console.log(data);
    })
    .catch((error) => {
      alert("Произошла ошибка при отправке формы.");
      console.error(error);
    });
}
