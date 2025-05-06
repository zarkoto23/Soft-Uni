
async function loadParts() {
  const response = await fetch("http://localhost:3030/data/autoparts");
  const data = await response.json();

  showParts(data);
}

function showParts(data) {
  const ul = document.getElementById("parts");
  ul.textContent = "";
  data.forEach((element) => {
    const li = document.createElement("li");
    li.textContent = `${element.label}`;
    ul.appendChild(li);

    li.addEventListener("click", () => showDetails(element, li));
  });
}

function showDetails(element, li) {
  const allDetails = document.querySelectorAll(".details");
  allDetails.forEach((detail) => {
    if (!li.contains(detail)) {
      detail.remove();
    }
  });

  const isExist = li.querySelector(".details");
  if (isExist) {
    isExist.remove();
  } else {
    const div = document.createElement("div");
    div.className = "details";

    const qty = document.createElement("p");
    qty.textContent = `${element.qtyY} in stock`;

    const price = document.createElement("p");
    price.textContent = `$${element.price}`;

    const description = document.createElement("p");
    description.textContent = element.description;

    div.appendChild(price);
    div.appendChild(qty);
    div.appendChild(description);

    li.appendChild(div);
  }
}

export { loadParts };

