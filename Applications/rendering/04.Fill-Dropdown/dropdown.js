import { html, render } from "https://unpkg.com/lit-html?module";

const menuEl = document.getElementById("menu");
const inputEl = document.getElementById("itemText");
const submitForm = document
  .querySelector("form")
  .addEventListener("submit", onSubmit);

const url = "http://localhost:3030/jsonstore/advanced/dropdown";

async function onSubmit(e) {
  e.preventDefault();
  await getData(url, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({ text: inputEl.value }),
  });
  inputEl.value = "";

  const allData = await getData(url);
  templateF(allData)
}

async function getData(url, options = {}) {
  const response = await fetch(url, options);
  const data = await response.json();
  return data
}

function templateF(data) {
  const template = html`
    ${Object.values(data).map((town) => html`<option value="${town._id}">${town.text}</option>`)}
  `;

  render(template, menuEl);
}

getData(url).then(templateF)