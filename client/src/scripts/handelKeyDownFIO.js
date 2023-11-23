function handleKeyDown(event) {
  const allowedCharacters = /[A-Za-zА-Яа-яЁё\s\-]/;

  if (!allowedCharacters.test(event.key)) {
    event.preventDefault();
  }
}
