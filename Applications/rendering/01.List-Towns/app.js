import { html, render } from "/node_modules/lit-html/lit-html.js";

document.getElementById("btnLoadTowns").addEventListener("click", createLi);


function createLi(e) {
  e.preventDefault();

  const rootDiv = document.getElementById("root");
  const inputData = document.getElementById("towns").value.split(", ");

  const liEl = html` <ul>
    ${inputData.map((t) => html`<li>${t}</li>`)}
  </ul>`;
  render(liEl, rootDiv)
}
