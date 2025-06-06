import { html, render } from "../../node_modules/lit-html/lit-html.js";
import page from "../../node_modules/page/page.mjs";
import userServices from "../api/userService.js";
// import { baseUrl } from "../constants.js";
import { showNavigation } from "../app.js";

const mainEl = document.querySelector("main");

export default async function showRegisterPage() {
  render(registerTemplate(), mainEl);
}

function registerTemplate() {
  return html` <section id="register">
    <article class="narrow">
      <header class="pad-med">
        <h1>Register</h1>
      </header>
      <form
        @submit=${registerUser}
        id="register-form"
        class="main-form pad-large"
      >
        <div class="error">Error message.</div>
        <label>E-mail: <input type="text" name="email" /></label>
        <label>Username: <input type="text" name="username" /></label>
        <label>Password: <input type="password" name="password" /></label>
        <label>Repeat: <input type="password" name="repass" /></label>
        <input class="action cta" type="submit" value="Create Account" />
      </form>
      <footer class="pad-small">
        Already have an account? <a href="#" class="invert">Sign in here</a>
      </footer>
    </article>
  </section>`;
}

async function registerUser(e) {
  e.preventDefault();
  const formData = new FormData(e.currentTarget);
  const userData = Object.fromEntries(formData);

  if (userData.password !== userData.repass) {
    return alert("passwords dont match");
  }

  try {
    const result = await userServices.register(userData);
    showNavigation();

    page.redirect("/profile");
  } catch (error) {
    alert(error.message);
  }
}
