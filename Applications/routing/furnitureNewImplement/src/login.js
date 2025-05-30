import { html, render } from "../../node_modules/lit-html/lit-html.js";
import { util } from "./home.js";
import page from "../../node_modules/page/page.mjs";

const mainEl = document.querySelector("main");
export function showLogin() {
  const template = html`
    <div class="container">
      <div class="row space-top">
        <div class="col-md-12">
          <h1>Login User</h1>
          <p>Please fill all fields.</p>
        </div>
      </div>
      <form @submit=${onSubmit}>
        <div class="row space-top">
          <div class="col-md-4">
            <div class="form-group">
              <label class="form-control-label" for="email">Email</label>
              <input class="form-control" id="email" type="text" name="email" />
            </div>
            <div class="form-group">
              <label class="form-control-label" for="password">Password</label>
              <input
                class="form-control"
                id="password"
                type="password"
                name="password"
              />
            </div>
            <input type="submit" class="btn btn-primary" value="Login" />
          </div>
        </div>
      </form>
    </div>
  `;

  render(template, mainEl);
}

async function onSubmit(e) {
  e.preventDefault();
  const form = new FormData(e.target);
  const email = form.get("email");
  const password = form.get("password");

  const response = await fetch(util.userUrl + "login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });

  if (!response.ok) {
    const eror = await response.json();
  }

  const data = await response.json();

  localStorage.setItem("id", data._id);
  localStorage.setItem("token", data.accessToken);

  page.redirect('/')
}
