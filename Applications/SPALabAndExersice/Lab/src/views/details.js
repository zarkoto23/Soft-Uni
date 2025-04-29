export function showDetailsView(partId) {
  document
    .querySelectorAll("section")
    .forEach((s) => (s.style.display = "none"));
  document.getElementById("details").style.display = "block";

  document.querySelector("#details h2").innerHTML = "loading........";
  document.querySelector("#details .subtitle").innerHTML = "laoloading/>/>/>";
  document.querySelector("#details .description").innerHTML = "loadinG";

  loadDetails(partId);
}

async function loadDetails(partId) {
  const response = await fetch("http://localhost:3030/data/catalog/" + partId);
  if (!response.ok) {
    return alert("eror loading details.,.,.");
  }

  const data = await response.json();

  console.log(data);
  showDetails(data);
}

function showDetails(data) {
  document.querySelector("#details h2").textContent = data.model;
  document.querySelector(
    "#details .subtitle"
  ).innerHTML = `<span class="price">$${data.price}</span> | <span class="stock">${data.year} in stock</span>`;
  document.querySelector("#details .description").textContent =
    data.description;
}
