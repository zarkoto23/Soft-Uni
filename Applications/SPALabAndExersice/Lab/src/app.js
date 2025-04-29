import { showCatalogView } from "./views/catalog.js";
import { showHomeView } from "./views/home.js";

document.getElementById("home-nav").addEventListener("click", (event) => {
  event.preventDefault();
  showHomeView();
});

document.getElementById("catalog-nav").addEventListener("click", (event) => {
  event.preventDefault();
  showCatalogView();
});

document.getElementById("catalog-link").addEventListener("click", (event) => {
  event.preventDefault();
  showCatalogView();
});

showHomeView();
