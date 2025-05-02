import { startCatalog } from "./views/catalog.js";
import { showView } from "./views/nav.js";

document.getElementById("home-nav").addEventListener("click", (event) => {
  event.preventDefault();
  showView('home');
});

document.getElementById("catalog-nav").addEventListener("click", (event) => {
  event.preventDefault();
  showView('catalog',startCatalog);
});

document.getElementById("catalog-link").addEventListener("click", (event) => {
  event.preventDefault();
  
  showView('catalog', startCatalog)


});
showView('home')




