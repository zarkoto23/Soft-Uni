import { html, render } from "../node_modules/lit-html/lit-html.js";
import { dataUrl } from "./constant.js";
import {showDetailsPage } from "./details.js";

const mainEl = document.querySelector("main");

export async function showHomePage() {
  const response = await fetch(dataUrl);
  const data = await response.json();

  render(homeTemlate(data), mainEl);
}

export function homeTemlate(data) {

  return html`<div class="container">
        <div class="row space-top">
            <div class="col-md-12">
                <h1>Welcome to Furniture System</h1>
                <p>Select furniture from the catalog to view details.</p>
            </div>
                    ${data.map(product=>singleProductTemplate(product))}
        </div>
    </div>`;
}

function singleProductTemplate(data) {
  return html`
    <div class="col-md-4">
      <div class="card text-white bg-primary">
        <div class="card-body">
          <img src="${data.img}" alt="Furniture Image" />
          <p>${data.description}</p>
          <footer>
            <p>Price: <span>${data.price} $</span></p>
          </footer>
          <div>
            <a @click=${(e) => showDetailsPage(data, e)} href='/details/${data._id}' class="btn btn-info">Details</a>
          </div>
        </div>
      </div>
    </div>
  `;
}

