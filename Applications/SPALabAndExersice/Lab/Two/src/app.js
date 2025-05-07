import { loadParts } from "./views/list.js";
import { showView } from "./views/nav.js";
import "./views/login.js";
import "./views/create.js";
import "./views/regiter.js"

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
