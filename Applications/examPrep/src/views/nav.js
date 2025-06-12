import { html, render } from "../../node_modules/lit-html/lit-html.js";
import page  from "../../node_modules/page/page.mjs"

const mainEl = document.querySelector("header");

export default async function showNav() {

  
  render(navTemplate(), mainEl);
}

function navTemplate() {
  return html`
    <a id="logo" href="/"
      ><img id="logo" src="./images/logo2.png" alt="img"
    /></a>
    <nav>
      <div>
        <a href="/dashboard">Marketplace</a>
      </div>

      <!-- Logged-in users -->
      <div class="user">
        <a href="/create">Sell</a>
        <a href="">Logout</a>
      </div>

      <!-- Guest users -->
      <div class="guest">
        <a href="/login">Login</a>
        <a href="/register">Register</a>
      </div>
    </nav>`;
}
