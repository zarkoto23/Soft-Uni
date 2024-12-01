function focused() {
  const input = document.querySelectorAll("div input");
  input.forEach((el) => {
    el.addEventListener("focus", (event) => {
      el.parentElement.classList.add("focused");
    });
    el.addEventListener("blur", (event) => {
      el.parentElement.classList.remove("focused");
    });
  });
  console.log(input);
}
