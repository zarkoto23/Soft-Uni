import { startDetails } from "./details.js";
import { showView } from "./nav.js";

export function startCatalog() {
  const list = document.getElementById("parts");
  list.innerHTML = "loading---";
  loadParts();
}

async function loadParts() {
  const response = await fetch("http://localhost:3030/data/autoparts");

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
  element.innerHTML = `<a id=${partData._id} href="/catalog/${partData._id}">${partData.label} - $${partData.price}`;

  element.querySelector("a").addEventListener("click", (event) => {
    event.preventDefault();
    showView("details", startDetails, partData._id);
  });
  return element;
}
