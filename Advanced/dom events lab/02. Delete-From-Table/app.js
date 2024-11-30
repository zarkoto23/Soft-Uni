function deleteByEmail() {
  const elements = document.querySelectorAll("#customers tbody tr");
  const result = document.querySelector("#result");
  const searchEL = document.querySelector("label input");

  result.textContent = "";
  let found = false;

  elements.forEach((row) => {
    const mail = row.children[1];
    if (mail.textContent == searchEL.value) {
      mail.parentElement.remove();
      found = true;
    }
  });

  result.textContent = found ? "Deleted." : "Not found.";

  searchEL.value = "";
  searchEL.focus();
}
