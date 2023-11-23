function handleFocus(inputId) {
  document
    .querySelector(`.feedback-form__label[for=${inputId}]`)
    .classList.add("feedback-form__label-focused");
}

function handleBlur(inputId) {
  document
    .querySelector(`.feedback-form__label[for=${inputId}]`)
    .classList.remove("feedback-form__label-focused");
}
