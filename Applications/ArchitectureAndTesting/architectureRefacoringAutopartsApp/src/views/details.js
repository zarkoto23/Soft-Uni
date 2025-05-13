import { get } from "../data/api.js";

export function startDetails(partId) {
  document.querySelector("#details h2").innerHTML = "Loading &hellip;";
  document.querySelector("#details .subtitle").innerHTML = "Loading &hellip;";
  document.querySelector("#details .description").innerHTML =
    "Loading &hellip;";

  loadDetails(partId);
}

async function loadDetails(partId) {
  const data = await get("/data/autoparts/" + partId);

  showDetails(data);
}

function showDetails(data) {
  document.querySelector("#details h2").textContent = data.label;
  document.querySelector(
    "#details .subtitle"
  ).innerHTML = `<span class="price">$${data.price}</span> | <span class="stock">${data.qty} in stock</span>`;
  document.querySelector("#details .description").textContent =
    data.description;
}
