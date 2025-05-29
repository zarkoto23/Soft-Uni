import { html, render } from "../../node_modules/lit-html/lit-html.js";
import page from "../../node_modules/page/page.mjs";
import { dataUrl } from "./constant.js";

const mainEl = document.querySelector("main");

export function showCreatePage() {
  render(createTemlate(), mainEl);
}

function createTemlate() {
  return html`<div class="container">
    <div class="row space-top">
      <div class="col-md-12">
        <h1>Create New Furniture</h1>
        <p>Please fill all fields.</p>
      </div>
    </div>
    <form @submit=${validationForm}>
      <div class="row space-top">
        <div class="col-md-4">
          <div class="form-group">
            <label class="form-control-label" for="new-make">Make</label>
            <input class="form-control" id="new-make" type="text" name="make" />
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
            <input class="form-control" id="new-image" type="text" name="img" />
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
  </div>`;
}

async function onCreate(data) {
  const response = await fetch(dataUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Authorization": localStorage.getItem("token"),
    },
    body: JSON.stringify(data),
  });
  // const fetchData=await response.json(data)
  page.redirect("/");
}


function validationForm(e) {
  e.preventDefault();
  // if(!localStorage.getItem('token')){
  //   alert('you should login to able the create function')
  //   return
  // }
  const formElement = e.currentTarget;
  const formData = new FormData(formElement);
  const data = Object.fromEntries(formData);

  const errors = [];

  chek(formElement);

  if (data.year > 2050 || data.year < 1950) {
    errors.push("Year must be between 1950 and 2050");
    formElement.querySelector("#new-year").classList.add("is-invalid");
  } else {
    formElement.querySelector("#new-year").classList.add("is-valid");
  }

  if (data.make.trim().length < 4) {
    errors.push("Make must be at least 4 symbols long");
    formElement.querySelector("#new-make").classList.add("is-invalid");
  } else {
    formElement.querySelector("#new-make").classList.add("is-valid");
  }

  if (data.model.trim().length < 4) {
    errors.push("Model must be at least 4 symbols long");
    formElement.querySelector("#new-model").classList.add("is-invalid");
  } else {
    formElement.querySelector("#new-model").classList.add("is-valid");
  }

  if (data.description.trim().length < 11) {
    errors.push("Description must be more than 10 symbols");
    formElement.querySelector("#new-description").classList.add("is-invalid");
  } else {
    formElement.querySelector("#new-description").classList.add("is-valid");
  }

  if (isNaN(data.price) || data.price <= 0) {
    errors.push("Price must be a positive number");
    formElement.querySelector("#new-price").classList.add("is-invalid");
  } else {
    formElement.querySelector("#new-price").classList.add("is-valid");
  }

  if (!data.img || data.img.trim().length === 0) {
    errors.push("Image URL is required");
    formElement.querySelector("#new-image").classList.add("is-invalid");
  } else {
    formElement.querySelector("#new-image").classList.add("is-valid");
  }

  if (errors.length > 0) {
    alert(errors.join("\n"));

    return;
  } else {
    onCreate(data);
  }
}

function chek(formElement) {
  const fields = [
    "#new-year",
    "#new-make",
    "#new-model",
    "#new-description",
    "#new-price",
    "#new-image",
  ];
  fields.forEach((selector) => {
    const el = formElement.querySelector(selector);
    if (el) {
      el.classList.remove("is-invalid");
    }
  });
}
