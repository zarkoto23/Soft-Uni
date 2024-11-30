function addItem() {
  const itemsEl = document.querySelector("#items");
  const newItemEl = document.querySelector("#newItemText");

  const liElement = document.createElement("li");
  liElement.textContent = newItemEl.value;

  const newEl = document.createElement("a");

  newEl.href = "#";
  newEl.textContent = "[Delete]";
  liElement.appendChild(newEl);
  itemsEl.appendChild(liElement);

  newEl.addEventListener("click", () => liElement.remove());

  newItemEl.value = "";

  newItemEl.focus();
}
