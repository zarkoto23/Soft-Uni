import { render, html } from "../../node_modules/lit-html/lit-html.js";
import page from "../../node_modules/page/page.mjs";

const mainEl = document.querySelector("main");
const guestNav=document.querySelector('#guest')
const userNav=document.querySelector('#user')


export const util = {
  userUrl: "http://localhost:3030/users/",
  dataUrl: "http://localhost:3030/data/catalog/",
  get token() {
    return localStorage.getItem("token");
  },
  get id(){
    return localStorage.getItem('id')
  }
};

export async function showHome() {
  try {
    const response = await fetch(util.dataUrl);
    const data = await response.json();

    render(homeTemplate(data), mainEl);
  } catch (error) {
    alert(error.message);
  }

 
}


function homeTemplate(data) {
  return html`
    <div class="container">
      <div class="row space-top">
        <div class="col-md-12">
          <h1>Welcome to Furniture System</h1>
          <p>Select furniture from the catalog to view details.</p>
        </div>
      </div>
      <div class="row space-top">${singleProductTemplate(data)}</div>
    </div>
  `;
}

function singleProductTemplate(data) {
  return data.map(
    (product) => html`
      <div class="col-md-4">
        <div class="card text-white bg-primary">
          <div class="card-body">
            <img src="${product.img}" />
            <p>${product.description}</p>
            <footer>
              <p>Price: <span>${product.price} $</span></p>
            </footer>
            <div>
              <a href="/details/${product._id}" class="btn btn-info">Details</a>
            </div>
          </div>
        </div>
      </div>
    `
  );
}
