import { html, render } from "../../node_modules/lit-html/lit-html.js";
import page from "../../node_modules/page/page.mjs";

const mainEl = document.querySelector("main");

export default async function showEditPage() {
  render(editTemplate(), mainEl);
}

function editTemplate() {
  return html` <section id="edit">
    <article class="narrow">
      <header class="pad-med">
        <h1>Edit Team</h1>
      </header>
      <form id="edit-form" class="main-form pad-large">
        <div class="error">Error message.</div>
        <label>Team name: <input type="text" name="name" /></label>
        <label>Logo URL: <input type="text" name="logoUrl" /></label>
        <label>Description: <textarea name="description"></textarea></label>
        <input class="action cta" type="submit" value="Save Changes" />
      </form>
    </article>
  </section>`;
}
