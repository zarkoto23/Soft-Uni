import { initNavigation,navTo } from "./nav.js";
import { showCatalog } from "./views/catalog.js";
import "./views/login.js";
import "./views/create.js";
import { showHome } from "./data/home.js";
import { showDetails } from "./views/details.js";

const views = {
  "home-nav": showHome,
  "catalog-nav": showCatalog,
  "catalog-link": showCatalog,

  "details": showDetails,

  "login-nav": ["login"],
  "login-link": ["login"],
  "register-nav": ["register"],
  "register-link": ["register"],
  "create-nav": ["create"],
};

initNavigation(views);

navTo("home-nav");

// TODO Check for user sessiosn and update nav link visibility
//