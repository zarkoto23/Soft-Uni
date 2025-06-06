import { html, render } from "../../node_modules/lit-html/lit-html.js";
import page from "../../node_modules/page/page.mjs";
import teamService from "../api/teamsService.js";

const mainEl = document.querySelector("main");

export default async function showCreatePage() {
  render(createTemplate(), mainEl);
}

function createTemplate() {
  return html` <section id="create">
    <article class="narrow">
      <header class="pad-med">
        <h1>New Team</h1>
      </header>
      <form @submit=${createTeam} id="create-form" class="main-form pad-large">
        <div class="error">Error message.</div>
        <label>Team name: <input type="text" name="name" /></label>
        <label>Logo URL: <input type="text" name="logoUrl" /></label>
        <label>Description: <textarea name="description"></textarea></label>
        <input class="action cta" type="submit" value="Create Team" />
      </form>
    </article>
  </section>`;
}

async function createTeam(e) {
  e.preventDefault();
  const teamData = Object.fromEntries(new FormData(e.currentTarget));

  try {
    const result = await teamService.create(teamData);
    page.redirect(`/details/${teamData._id}`);
  } catch (error) {
    alert(error.message);
  }
}
