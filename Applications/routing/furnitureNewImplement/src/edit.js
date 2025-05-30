import { html, render } from "../node_modules/lit-html/lit-html.js";
import page from "../../node_modules/page/page.mjs";
import { util } from "./home.js";

const mainEl = document.querySelector("main");

export async function showEdit(ctx) {
  const productId = ctx.params.id;

  const response = await fetch(util.dataUrl + productId);
  const data = await response.json();
  
  

  render(templateEdit(data), mainEl);
}

function templateEdit(data) {
  return html`
    <div class="container">
      <div class="row space-top">
        <div class="col-md-12">
          <h1>Edit Furniture</h1>
          <p>Please fill all fields.</p>
        </div>
      </div>
      <form @submit=${(e) => onSumbitEdit(e, data)}>
        <div class="row space-top">
          <div class="col-md-4">
            <div class="form-group">
              <label class="form-control-label" for="new-make">Make</label>
              <input
                class="form-control"
                id="new-make"
                type="text"
                name="make"
                value=${data.make}
              />
            </div>
            <div class="form-group has-success">
              <label class="form-control-label" for="new-model">Model</label>
              <input
                class="form-control"
                id="new-model"
                type="text"
                name="model"
                value=${data.model}
              />
            </div>
            <div class="form-group has-danger">
              <label class="form-control-label" for="new-year">Year</label>
              <input
                class="form-control"
                id="new-year"
                type="number"
                name="year"
                value=${data.year}
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
                value=${data.description}
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
                value=${data.price}
              />
            </div>
            <div class="form-group">
              <label class="form-control-label" for="new-image">Image</label>
              <input
                class="form-control"
                id="new-image"
                type="text"
                name="img"
                value=${data.img}
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
                value=${data.material}
              />
            </div>
            <input type="submit" class="btn btn-info" value="Edit" />
          </div>
        </div>
      </form>
    </div>
  `;
}

async function onSumbitEdit(e, data) {
  e.preventDefault();

    const newForm = new FormData(e.target);
    const newData = Object.fromEntries(newForm);

  let err = [];

  for (const [key, value] of Object.entries(newData)) {
    switch (key) {
      case "description":
        if (value.trim().length <= 10) {
          err.push("description must be more than 10 symbols");
          document.getElementById(`new-${key}`).classList.add("is-invalid");
        } else {
          document.getElementById(`new-${key}`).classList.remove("is-invalid");
          document.getElementById(`new-${key}`).classList.add("is-valid");
        }
        break;
      case "img":
        if (!value.trim().length) {
          err.push("must have image");
          document.getElementById(`new-image`).classList.add("is-invalid");
        } else {
          document.getElementById(`new-image`).classList.remove("is-invalid");
          document.getElementById(`new-image`).classList.add("is-valid");
        }
        break;

      case "make":
        if (value.trim().length < 4) {
          err.push("make must be more than 4 symbols");
          document.getElementById(`new-${key}`).classList.add("is-invalid");
        } else {
          document.getElementById(`new-${key}`).classList.remove("is-invalid");
          document.getElementById(`new-${key}`).classList.add("is-valid");
        }
        break;

      case "model":
        if (value.trim().length < 4) {
          err.push("model must be more than 4 symbols");
          document.getElementById(`new-${key}`).classList.add("is-invalid");
        } else {
          document.getElementById(`new-${key}`).classList.remove("is-invalid");
          document.getElementById(`new-${key}`).classList.add("is-valid");
        }
        break;

      case "price":
        if (Number(value) < 0 || value.length == "") {
          err.push("price must be positive");
          document.getElementById(`new-${key}`).classList.add("is-invalid");
        } else {
          document.getElementById(`new-${key}`).classList.remove("is-invalid");
          document.getElementById(`new-${key}`).classList.add("is-valid");
        }
        break;
      case "year":
        if (value < 1950 || value > 2050) {
          err.push("year must be between 1950 and 2050");
          document.getElementById(`new-${key}`).classList.add("is-invalid");
        } else {
          document.getElementById(`new-${key}`).classList.remove("is-invalid");
          document.getElementById(`new-${key}`).classList.add("is-valid");
        }
        break;
    }
  }
  if (err.length > 0) {
    alert(err.join("\n"));
    return 
  }



  const respone = await fetch(util.dataUrl + data._id, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      "X-Authorization": util.token,
    },
    body: JSON.stringify(newData),
  });

  page.redirect("/");
}
