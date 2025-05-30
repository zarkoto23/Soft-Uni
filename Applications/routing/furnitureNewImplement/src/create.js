import { html, render } from "../node_modules/lit-html/lit-html.js";
import page from "../../node_modules/page/page.mjs";

const mainEl = document.querySelector("main");
export function showCreate() {
  const temp = html`
    <div class="container">
      <div class="row space-top">
        <div class="col-md-12">
          <h1>Create New Furniture</h1>
          <p>Please fill all fields.</p>
        </div>
      </div>
      <form @submit=${createSubmit}>
        <div class="row space-top">
          <div class="col-md-4">
            <div class="form-group">
              <label class="form-control-label" for="new-make">Make</label>
              <input
                class="form-control valid"
                id="new-make"
                type="text"
                name="make"
              />
            </div>
            <div class="form-group has-success">
              <label class="form-control-label" for="new-model">Model</label>
              <input
                class="form-control"
                id="new-model"
                type="text"
                name="model"
              />
            </div>
            <div class="form-group has-danger">
              <label class="form-control-label" for="new-year">Year</label>
              <input
                class="form-control"
                id="new-year"
                type="number"
                name="year"
              />
            </div>
            <div class="form-group">
              <label class="form-control-label" for="new-description"
                >Description</label
              >
              <input
                class="form-control"
                id="new-description"
                type="text"
                name="description"
              />
            </div>
          </div>
          <div class="col-md-4">
            <div class="form-group">
              <label class="form-control-label" for="new-price">Price</label>
              <input
                class="form-control"
                id="new-price"
                type="number"
                name="price"
              />
            </div>
            <div class="form-group">
              <label class="form-control-label" for="new-image">Image</label>
              <input
                class="form-control"
                id="new-image"
                type="text"
                name="img"
              />
            </div>
            <div class="form-group">
              <label class="form-control-label" for="new-material"
                >Material (optional)</label
              >
              <input
                class="form-control"
                id="new-material"
                type="text"
                name="material"
              />
            </div>
            <input type="submit" class="btn btn-primary" value="Create" />
          </div>
        </div>
      </form>
    </div>
  `;

  render(temp, mainEl);
}

async function createSubmit(e) {
  e.preventDefault();
  const formData = new FormData(e.target);
  const data = Object.fromEntries(formData);

  let err = [];

  for (const [key, value] of Object.entries(data)) {
    switch (key) {
      case "description":
        if (value.trim().length <= 10) {
          err.push("description must be more than 10 symbols");
          document.getElementById(`new-${key}`).classList.add("is-invalid");
        }else{
          document.getElementById(`new-${key}`).classList.remove("is-invalid");
          document.getElementById(`new-${key}`).classList.add("is-valid");
        }
        break;
      case "img":
        if (!value.trim().length) {
          err.push("must have image");
          document.getElementById(`new-image`).classList.add("is-invalid");
        }else{
          document.getElementById(`new-image`).classList.remove("is-invalid");
          document.getElementById(`new-image`).classList.add("is-valid");
        }
        break;

      case "make":
        if (value.trim().length < 4) {
          err.push("make must be more than 4 symbols");
          document.getElementById(`new-${key}`).classList.add("is-invalid");
        }else{
          document.getElementById(`new-${key}`).classList.remove("is-invalid");
          document.getElementById(`new-${key}`).classList.add("is-valid");
        }
        break;

      case "model":
        if (value.trim().length < 4) {
          err.push("model must be more than 4 symbols");
          document.getElementById(`new-${key}`).classList.add("is-invalid");
        }else{
          document.getElementById(`new-${key}`).classList.remove("is-invalid");
          document.getElementById(`new-${key}`).classList.add("is-valid");
        }
        break;

      case "price":
        if (Number(value) < 0 || value.length == "") {
          err.push("price must be positive");
          document.getElementById(`new-${key}`).classList.add("is-invalid");
        }else{
          document.getElementById(`new-${key}`).classList.remove("is-invalid");
          document.getElementById(`new-${key}`).classList.add("is-valid");
        }
        break;
      case "year":
        if (value < 1950 || value > 2050) {
          err.push("year must be between 1950 and 2050");
          document.getElementById(`new-${key}`).classList.add("is-invalid");
        }else{
          document.getElementById(`new-${key}`).classList.remove("is-invalid");
          document.getElementById(`new-${key}`).classList.add("is-valid");
        }
        break;
    }
  }
  if (err.length > 0) {
    alert(err.join("\n"));
    return;
  }

  const response = await fetch("http://localhost:3030/data/catalog", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Authorization": localStorage.getItem("token"),
    },
    body: JSON.stringify(data),
  });

  page.redirect("/");
}
