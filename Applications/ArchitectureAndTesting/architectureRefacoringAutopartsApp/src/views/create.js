import { post } from "../data/api.js";
import { showView } from "../nav.js";
import { createSubmitHandler } from "../util.js";
import { startDetails } from "./details.js";

document
  .querySelector("#create form")
  .addEventListener("submit", createSubmitHandler(onCreate));

async function onCreate({ label, price, qty, description }, form) {
  price = Number(price);
  qty = Number(qty);

  if (!label || !description) {
    return alert("All fields are required");
  }
  if (price <= 0) {
    return alert("Price must be a positive number");
  }
  if (qty < 0) {
    return alert("Quantity cannot be negative");
  }

  const result = await post("/data/autoparts", {
    label,
    price,
    qty,
    description,
  });

  form.reset();

  showView("details", startDetails, result._id);
}
