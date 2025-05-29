import { html, render } from "../../node_modules/lit-html/lit-html.js";
import page from "../../node_modules/page/page.mjs";
import {updateNav} from '../app.js'

import { userUrl } from "./constant.js";
import { showHomePage } from "./home.js";

const mainEl = document.querySelector("main");

export function showLoginPage() {
    if (localStorage.getItem('token')) {
    page.redirect('/'); // Пренасочваме към home
    return; // Спираме изпълнението, за да не рендерира login формата
  }
  render(loginTemlate(), mainEl);
}

function loginTemlate() {
  return html`<div class="container">
    <div class="row space-top">
      <div class="col-md-12">
        <h1>Login User</h1>
        <p>Please fill all fields.</p>
      </div>
    </div>
    <form @submit=${loginUser}>
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
  </div>`;
}

async function loginUser(e) {
  e.preventDefault();
  const formData = new FormData(e.currentTarget);
  const userData = Object.fromEntries(formData);

  try {
    const response = await fetch(userUrl + "login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });

    const data = await response.json();


    if (!response.ok) {
      throw new Error(data.message || 'Login failed!');
    }

    localStorage.setItem("token", data.accessToken);
    localStorage.setItem("email", data.email);
    localStorage.setItem("userName", data.username);
    localStorage.setItem("id", data._id);

    page.redirect('/')

    updateNav()
    

  } catch (error) {
    alert(error.message);
  }
}

