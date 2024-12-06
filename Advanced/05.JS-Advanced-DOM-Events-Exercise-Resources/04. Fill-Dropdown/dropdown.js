function addItem() {
  const menuEl = document.querySelector("#menu");

  const itemTxt = document.querySelector("#newItemText");
  const itemValue = document.querySelector("#newItemValue");

  if (itemTxt.value == "" || itemValue.value == "") return;

  const newEl = document.createElement("option");

  newEl.textContent = itemTxt.value;
  newEl.value = itemValue.value;

  menuEl.appendChild(newEl);

  itemTxt.value = "";
  itemValue.value = "";
  itemTxt.focus();
}
