import { html, render } from "./node_modules/lit-html/lit-html.js";
import { cats } from "./catSeeder.js";

const sectionEl = document.getElementById("allCats");

function onLoad() {
  const catTemplate = html` <ul>
    ${cats.map(
      (cat) => html`
        <li id="${cat.id}">
          <img src="./images/${cat.imageLocation}.jpg" />
          <div class="info">
            <button @click=${() => toggleBtn(cat)} class="showBtn">
              Show status code
            </button>
            <div class="status"></div>
          </div>
        </li>
      `
    )}
  </ul>`;
  render(catTemplate, sectionEl);
}

function toggleBtn(cat) {
  const statusInfo = document.getElementById(cat.id);
  const btn = statusInfo.querySelector(".showBtn");
  let divInfo = statusInfo.querySelector(".status");

  if (!divInfo.hasChildNodes()) {
    const statusTemplate = html`
      <div class="status">
        <h4>Status Code: ${cat.statusCode}</h4>
        <p>${cat.statusMessage}</p>
      </div>
    `;
    render(statusTemplate, divInfo);
    divInfo.style.display = "block";
    btn.textContent = "Hide status code";
  } else {
    if (divInfo.style.display === "none" || divInfo.style.display === "") {
      divInfo.style.display = "block";
      btn.textContent = "Hide status code";
    } else {
      divInfo.style.display = "none";
      btn.textContent = "Show status code";
    }
  }
}
onLoad();

//new Cat('100', 100, 'Continue', 'cat100'),
//id, statusCode, statusMessage, imageLocation)
