import { loadParts } from "./views/list.js";
import { showView } from "./views/nav.js";
import "./views/login.js";
import "./views/create.js";
import "./views/regiter.js";
import "./views/logout.js";

const accessToken = localStorage.getItem("accessToken");
const loginNav = document.querySelector("#login-nav");
const registerNav = document.querySelector("#register-nav");
const logoutNav = document.querySelector("#logout-nav");
if (accessToken) {
  loginNav.style.display = "none";
  registerNav.style.display = "none";
  logoutNav.style.display = "inline";
} else {
  logoutNav.style.display = "none";
  loginNav.style.display = "inline";
  registerNav.style.display = "inline";
}

const views = {
  "home-nav": ["home"],
  "list-nav": ["list", loadParts],
  "login-nav": ["login"],
  "login-link": ["login"],
  "register-nav": ["register"],
  "register-link": ["register"],
  "parts-link": ["add-part"],
};

for (let linkId in views) {
  const [sectionId, callback] = views[linkId];

  document.getElementById(linkId).addEventListener("click", (e) => {
    e.preventDefault();
    showView(sectionId, callback);
  });
}
document.getElementById("home").style.display = "block";
