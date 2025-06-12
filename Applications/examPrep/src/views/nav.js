import { html, render } from "../../node_modules/lit-html/lit-html.js";
import { page } from "../../node_modules/page/page.mjs";

const mainEl = document.querySelector("header");

export default async function showNav() {
  render(navTemplate(), mainEl);
}

function navTemplate() {
  return html` <!-- Navigation -->
    <a id="logo" href="#"
      ><img id="logo" src="./images/logo2.png" alt="img"
    /></a>
    <nav>
      <div>
        <a href="#">Marketplace</a>
      </div>

      <!-- Logged-in users -->
      <div class="user">
        <a href="#">Sell</a>
        <a href="#">Logout</a>
      </div>

      <!-- Guest users -->
      <div class="guest">
        <a href="#">Login</a>
        <a href="#">Register</a>
      </div>
    </nav>`;
}
