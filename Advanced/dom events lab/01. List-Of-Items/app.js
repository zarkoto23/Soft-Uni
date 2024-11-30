function addItem() {
  const items = document.querySelector("#items");
  const newInputText = document.querySelector("#newItemText");

  const newEl = document.createElement("li");
  newEl.textContent = newInputText.value;
  items.append(newEl);
  newInputText.value = "";
  newInputText.focus();
}
