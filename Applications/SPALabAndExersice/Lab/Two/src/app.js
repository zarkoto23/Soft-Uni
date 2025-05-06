import { loadParts } from "./views/list.js";
import { showView } from "./views/nav.js";
import './views/login.js'

const views = {
  "home-nav": ["home"],
  "list-nav": ["list", loadParts],
  "login-nav":['login'],
  "login-link":['login'],
  "register-nav":["register"],
  "register-link":["register"]

};

for (let linkId in views) {
  const [sectionId,callback] = views[linkId];

  document.getElementById(linkId).addEventListener("click", (e) => {
    e.preventDefault();
    showView(sectionId, callback);
  });
}
document.getElementById("home").style.display = "block";

