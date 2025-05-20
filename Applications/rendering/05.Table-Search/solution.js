import { html, render } from "https://unpkg.com/lit-html?module";

function solve() {
  document.querySelector("#searchBtn").addEventListener("click", onClick);

  function onClick() {
    const searchedTxt = document
      .getElementById("searchField")
      .value.toLowerCase();
    const searchInRow = document.querySelectorAll("tbody tr");

    searchInRow.forEach((row) => {
      row.classList.remove("select");
      const tdRow = row.querySelectorAll("td");
      tdRow.forEach((element) => {
        if (element.textContent.toLowerCase().includes(searchedTxt)) {
          row.classList.add("select");
        }
      });
    });
  }

  async function onLoad() {
    const url = "http://localhost:3030/jsonstore/advanced/table";
    const response = await fetch(url);
    const data = await response.json();

    const students = Object.values(data);

    allStudentsTemplate(students);
  }

  function studentTemplate(students) {
    return html`
      <tr>
        <td>${students.firstName} ${students.lastName}</td>
        <td>${students.email}</td>
        <td>${students.course}</td>
      </tr>
    `;
  }

  function allStudentsTemplate(students) {
    const tbodyEl = document.querySelector(".container tbody");
    const allTemp = html` ${students.map((s) => studentTemplate(s))} `;

    render(allTemp, tbodyEl);
  }

  onLoad();
}
solve();
