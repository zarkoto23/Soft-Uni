import { showDetailsView } from "./details.js";

export function showCatalogView() {
  document
    .querySelectorAll("section")
    .forEach((s) => (s.style.display = "none"));
  document.getElementById("catalog").style.display = "block";

  const list=document.getElementById('parts')
  list.innerHTML='loading---'
  loadParts();
}

async function loadParts() {
  const response = await fetch("http://localhost:3030/data/catalog");

  if (!response.ok) {
    return alert("error loading Catalog...");
  }

  const parts = await response.json();

  showParts(parts);
}

function showParts(parts) {
  const elements = parts.map(createPartPreviw);

  const list = document.getElementById("parts");
  list.replaceChildren(...elements);
}

function createPartPreviw(partData) {
  const element = document.createElement("li");
  element.innerHTML = `<a id=${partData._id} href="/catalog/${partData._id}">${partData.model} - $${partData.price}`;

  element.querySelector("a").addEventListener("click", (event) => {
    event.preventDefault();
    showDetailsView(partData._id);
  });
  return element;
}

//label=labelModel

//qty=qtyYear
