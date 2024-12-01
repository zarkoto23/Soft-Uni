function validate() {
  const regex = /^[a-z]+@[a-z]+\.[a-z]+$/;

  const inputField = document.querySelector("#email");

  inputField.addEventListener("change", () => {
    if (!regex.test(inputField.value)) {
      inputField.classList.add("error");
    } else {
      inputField.classList.remove("error");
    }
  });
}
