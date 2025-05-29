import page from "../node_modules/page/page.mjs";
import { dataUrl, userUrl } from "./views/constant.js";

import { showCreatePage } from "./views/create.js";
import { showDetailsPage } from "./views/details.js";
import { showHomePage } from "./views/home.js";
import { showLoginPage } from "./views/login.js";
import { showProfilePage } from "./views/profile.js";
import { showRegisterPage } from "./views/register.js";
import { showEditPage } from "./views/edit.js";

page("/", showHomePage);
page("/create", showCreatePage);
page("/login", showLoginPage);
page("/profile", showProfilePage);
page("/register", showRegisterPage);
page("/details/:id", showDetailsPage);
page("/edit/:id", showEditPage);

page("*", (ctx, next) => {
  updateNav();
  next();
});

page.start();

document.getElementById("logoutBtn").addEventListener("click", logOut);

async function logOut(e) {
  e.preventDefault();
  try {
    const response = await fetch(userUrl + "logout", {
      method: "GET",
      headers: { "X-Authorization": localStorage.getItem("token") },
    });

    if (!response.ok) {
      const err = await response.json();
      throw new Error(err.message || "Logout failed");
    }
    localStorage.clear();
    page.redirect("/");
    updateNav();
  } catch (err) {
    alert("Error: " + err.message);
  }
}

export function updateNav() {
  const token = localStorage.getItem("token");
  const userNav = document.getElementById("user");
  const guestNav = document.getElementById("guest");

  if (token) {
    userNav.style.display = "block";
    guestNav.style.display = "none";
  } else {
    userNav.style.display = "none";
    guestNav.style.display = "block";
  }
}

export async function onDelete(e, resData, ctx) {
  e.preventDefault();

  if (!confirm("Are you sure you want to delete this item?")) return;

  try {
    // Правилен URL с '/'
    const url = dataUrl.endsWith("/")
      ? dataUrl + resData._id
      : dataUrl + "/" + resData._id;

    const response = await fetch(url, {
      method: "DELETE",
      headers: {
        "X-Authorization": localStorage.getItem("token"),
      },
    });

    if (!response.ok) {
      const err = await response.json();
      throw new Error(err.message);
    }

    // Проверка откъде идва потребителят и редирект
    const fromProfile = ctx.pathname.startsWith("/profile");
    page.redirect(fromProfile ? "/profile" : "/");
  } catch (err) {
    alert(err.message);
  }
}

updateNav();
