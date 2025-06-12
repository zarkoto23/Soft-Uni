import { html, render } from "../../node_modules/lit-html/lit-html.js";
import page from "../../node_modules/page/page.mjs";
import teamService from "../api/teamsService.js";

const mainEl = document.querySelector("main");

export default async function showEditPage(ctx) {
  
  const teamId=ctx.params.teamId
  const team=await teamService.getById(teamId)
  console.log(team)


  render(editTemplate(team), mainEl);
}
  function editTemplate(team) {
  return html` <section id="edit">
    <article class="narrow">
      <header class="pad-med">
        <h1>Edit Team</h1>
      </header>
      <form @submit=${(e)=>editTeam(e, team._id)} id="edit-form" class="main-form pad-large">
        <div class="error">Error message.</div>
        <label>Team name: <input type="text" name="name"  value=${team.name}/></label>
        <label>Logo URL: <input type="text" name="logoUrl" value=${team.logoUrl} /></label>
        <label>Description: <textarea name="description">${team.description}</textarea></label>
        <input class="action cta" type="submit" value="Save Changes" />
      </form>
    </article>
  </section>`; 
}

async function editTeam(e,teamId){
  console.log('asdas')
  e.preventDefault()

  try{
  const teamData=Object.fromEntries(new FormData(e.currentTarget))
  const result=await teamService.edit(teamId,teamData)
  page.redirect(`/details/${teamId}`)
  }catch(err){
    alert(err.message)
  }

}
