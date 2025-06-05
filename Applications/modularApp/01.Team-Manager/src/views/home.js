import { html, render } from "../../node_modules/lit-html/lit-html.js";
import page from "../../node_modules/page/page.mjs";

const mainEl = document.querySelector("main");

export default async function showHomePage() {
  render(homeTemplate(), mainEl);
}

function homeTemplate() {
  return html` <section id="home">
    <article class="hero layout">
      <img src="./assets/team.png" class="left-col pad-med" />
      <div class="pad-med tm-hero-col">
        <h2>Welcome to Team Manager!</h2>
        <p>Want to organize your peers? Create and manage a team for free.</p>
        <p>
          Looking for a team to join? Browse our communities and find
          like-minded people!
        </p>
        <a href="#" class="action cta">Sign Up Now</a>
        <a href="#" class="action cta">Browse Teams</a>
      </div>
    </article>
  </section>`;
}
