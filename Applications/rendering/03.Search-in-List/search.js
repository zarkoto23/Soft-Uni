import { html, render } from "./node_modules/lit-html/lit-html.js";
import { towns } from "./towns.js";

const searchBtn = document
  .querySelector("button")
  .addEventListener("click", onClick);
const townDiv = document.getElementById("towns");
const result=document.getElementById('result')
const townsTemplate = html` <ul>
  ${towns.map((t) => html`<li>${t}</li>`)}
</ul>`;

render(townsTemplate, townDiv);


function onClick() {
let counter=0


  const inputText = document.getElementById("searchText");
  const townElLi = [...document.querySelectorAll("#towns li")];
  townElLi.forEach((town) => {
    town.classList.remove("active");
    if (town.textContent.includes(inputText.value)&&inputText.value!='') {
      town.classList.add("active");
      counter++
    }
  });
    inputText.value = "";
    result.textContent=`${counter} matches found`

}
