import { html, render } from "../../node_modules/lit-html/lit-html.js";
import page  from "../../node_modules/page/page.mjs"
import { getToken } from "../util.js";


const mainEl = document.querySelector("header");

export default async function showNav() {

  
  render(navTemplate(), mainEl);
}

function navTemplate() {
const token=getToken()
console.log((token));


  return html`
    <a id="logo" href="/"
      ><img id="logo" src="./images/logo2.png" alt="img"
    /></a>
    <nav>
      <div>
        <a href="/dashboard">Marketplace</a>
      </div>

      ${token? html`
      <div class="user">
        <a href="/create">Sell</a>
        <a href="">Logout</a>
      </div> `: html`

      <div class="guest">
        <a href="/login">Login</a>
        <a href="/register">Register</a>
      </div> `}
    </nav> `
}
