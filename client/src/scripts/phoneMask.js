function maskPhone() {
  const phoneInput = document.getElementById("phone");
  let inputValue = phoneInput.value.replace(/\D/g, "");
  inputValue = `+7${inputValue.slice(1, 12)}`;
  const formattedValue = formatPhoneNumber(inputValue);
  phoneInput.value = formattedValue;
}

function formatPhoneNumber(value) {
  const match = value.match(
    /^(\+\d{0,1})(\d{0,3})(\d{0,3})(\d{0,2})(\d{0,2})$/
  );
  if (match) {
    const internationalCode = match[1] || "+7";
    const firstGroup = match[2] ? `(${match[2]}` : "";
    const secondGroup = match[3] ? `) ${match[3]}` : "";
    const thirdGroup = match[4] ? `-${match[4]}` : "";
    const fourthGroup = match[5] ? `-${match[5]}` : "";
    return `${internationalCode}${firstGroup}${secondGroup}${thirdGroup}${fourthGroup}`;
  }
  return value;
}

document
  .getElementById("feedbackForm")
  .addEventListener("submit", function (event) {
    const phoneInput = document.getElementById("phone");
    if (phoneInput.value.length < 17) {
      alert("Введите полный номер телефона.");
      event.preventDefault();
    }
  });
