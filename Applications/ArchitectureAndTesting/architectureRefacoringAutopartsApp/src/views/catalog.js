import { showView } from "../nav.js";
import { startDetails } from "./details.js";
import { get } from "../data/api.js";

export function startCatalog() {
  const list = document.getElementById("parts");
  list.innerHTML = "Loading &hellip;";

  loadParts();
}

async function loadParts() {
  const parts = await get("/data/autoparts");
  showParts(parts);
}

function showParts(parts) {
  const elements = parts.map(createPartPreview);

  const list = document.getElementById("parts");

  list.replaceChildren(...elements);
}

function createPartPreview(partData) {
  const element = document.createElement("li");

  element.innerHTML = `<a id=${partData._id} href="/catalog/${partData._id}">${partData.label} - $${partData.price}</a>`;

  element.querySelector("a").addEventListener("click", (event) => {
    event.preventDefault();
    showView("details", startDetails, partData._id);
  });

  return element;
}
