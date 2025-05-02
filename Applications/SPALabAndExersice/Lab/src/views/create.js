import { startDetails } from "./details.js";
import { showView } from "./nav.js";

document.querySelector("#create form").addEventListener("submit", onCreate);

async function onCreate(event) {
  event.preventDefault();

  const accessToken = localStorage.getItem("accessToken");
  if (!accessToken) {
    alert("please LOGIN");
    showView("login");
    return;
  }

  const formData = new FormData(event.target);

  const label = formData.get("label");
  const price = Number(formData.get("price"));
  const qtyY = Number(formData.get("qty"));
  const description = formData.get("description");

  if (!label || !description) {
    return alert("allField Required");
  }

  if (price <= 0) {
    return alert("price must be a positiVE number");
  }
  if (qtyY < 0) {
    return alert("qty must be a non-negative number");
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
    return alert("error:" + error.message);
  }

  const result = await response.json();
  showView("details", startDetails, result._id);
}
