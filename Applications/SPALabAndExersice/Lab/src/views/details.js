export function startDetails(partId) {
  document.querySelector("#details h2").innerHTML = "loading........";
  document.querySelector("#details .subtitle").innerHTML = "laoloading/>/>/>";
  document.querySelector("#details .description").innerHTML = "loadinG";

  loadDetails(partId);
}

async function loadDetails(partId) {
  const response = await fetch("http://localhost:3030/data/autoparts/" + partId);
  if (!response.ok) {
    return alert("eror loading details.,.,.");
  }

  const data = await response.json();

  console.log(data);
  showDetails(data);
}

function showDetails(data) {
  document.querySelector("#details h2").textContent = data.label;
  document.querySelector(
    "#details .subtitle"
  ).innerHTML = `<span class="price">$${data.price}</span> | <span class="stock">${data.qtyY} in stock</span>`;
  document.querySelector("#details .description").textContent =
    data.description;
}
