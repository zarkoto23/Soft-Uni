import { loadParts } from "./list.js";
import { showView } from "./nav.js";

document.querySelector("#add-part").addEventListener("submit", onClick);

function onClick(event) {
  event.preventDefault();

  const accessToken = localStorage.getItem("accessToken");
  if (!accessToken) {
    alert("If you want add a part, please login first!");
    showView("login");
    return;
  }
  const form = event.target;

  const formData = new FormData(form);

  const label = formData.get("part-name");
  const qtyY = Number(formData.get("part-qty"));
  const price = Number(formData.get("part-price"));
  const description = formData.get("part-description");
  if (!label || !qtyY || !price || !description) {
    alert("All fields must be completed");
    return;
  }
  if (isNaN(qtyY) || isNaN(price)) {
    alert("Price and Quantity must be numbers!");
  }

  if (qtyY <= 0 || price <= 0) {
    alert("Quantity and Price must be a positive!");

    return;
  }

  postData({ label, qtyY, price, description });

  form.reset();
}

async function postData({ label, qtyY, price, description }) {
  const accessToken = localStorage.getItem("accessToken");
  if (!accessToken) {
    alert("You must login to send data to the server!");
    showView("login");
    return;
  }

  const response = await fetch("http://localhost:3030/data/autoparts", {
    method: "post",
    headers: {
      "Content-Type": "application/json",
      "X-Authorization": accessToken,
    },
    body: JSON.stringify({
      label,
      price,
      qtyY,
      description,
    }),
  });
  if (!response.ok) {
    const error = await response.json();
    alert("Something wrong, please try again later " + error.message);
  } else {
    alert(`Your part is added sucsessfully!`);
  }
  loadParts();
  showView("list");
}
