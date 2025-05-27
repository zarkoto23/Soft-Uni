import page from "../node_modules/page/page.mjs"

import { startCatalog } from "./views/catalog.js";
import { showView } from "./views/nav.js";
import "./views/login.js";
import "./views/create.js";

const views = {
  "home-nav": ["home"],
  "catalog-nav": ["catalog", startCatalog],
  "catalog-link": ["catalog", startCatalog],
  "login-nav": ["login"],
  "login-link": ["login"],
  "register-nav": ["register"],
  "register-link": ["register"],
  "create-nav": ["create"],
};

page('/',showView('home'))
page('/catalog',showView('catalog'))
page('/login',showView('login'))
page('/register',showView('register'))
page('/create',showView('create'))
page('/',showView('home'))

page.start()

for (let linkId in views) {
  document.getElementById(linkId).addEventListener("click", (event) => {
    event.preventDefault();

    const [sectionId, callback] = views[linkId];

    showView(sectionId, callback);
  });
}

// showView("home");

//chek for user sesssion and update nav link visibility


// document.getElementById("home-nav").addEventListener("click", (event) => {
//   event.preventDefault();
//   showView('home');
// });

// document.getElementById("catalog-nav").addEventListener("click", (event) => {
//   event.preventDefault();
//   showView('catalog',startCatalog);
// });

// document.getElementById("catalog-link").addEventListener("click", (event) => {
//   event.preventDefault();

//   showView('catalog', startCatalog)

// });
