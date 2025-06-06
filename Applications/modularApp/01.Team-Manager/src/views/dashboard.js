import { html, render } from "../../node_modules/lit-html/lit-html.js";
import page from "../../node_modules/page/page.mjs";
import membersService from "../api/memberService.js";
import teamService from "../api/teamsService.js";

const mainEl = document.querySelector("main");

export default async function showDashboardPage() {
  const teams = await teamService.getAll();

  const members=await membersService.getAll()

  teams.forEach(team => {
    const teamMembers=members.filter(m=>m.teamId===team._id)
    team.membersCount=teamMembers.length
  });
  console.log(teams);
  
  

  render(dashboardTemplate(teams), mainEl);
}

function dashboardTemplate(teams) {
  return html` <section id="browse">
    <article class="pad-med">
      <h1>Team Browser</h1>
    </article>

    <article class="layout narrow">
      <div class="pad-small">
        <a href="/create" class="action cta">Create Team</a>
      </div>
    </article>

    ${teams.map((team) => teamTemplate(team))}
  </section>`;
}

function teamTemplate(team) {
  return html`
    <article class="layout">
      <img src=${team.logoUrl} class="team-logo left-col" />
      <div class="tm-preview">
        <h2>${team.name}</h2>
        <p>${team.description}</p>
        <span class="details">${team.membersCount}</span>
        <div><a href="/details/${team._id}" class="action">See details</a></div>
      </div>
    </article>
  `;
}
