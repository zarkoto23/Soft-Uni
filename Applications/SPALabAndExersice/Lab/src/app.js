import { startCatalog } from "./views/catalog.js";
import { showView } from "./views/nav.js";
import "./views/login.js"

const views={
  'home-nav':['home'],
  'catalog-nav':['catalog', startCatalog],
  'catalog-link':['catalog',startCatalog],
  'login-nav':['login'],
  'login-link':['login'],
  'register-nav':['register'],
  'register-link':['register'],


}

for(let linkId in views){
  document.getElementById(linkId).addEventListener('click', (event)=>{
    event.preventDefault()

    const [sectionId, callback]=views[linkId]

    showView(sectionId, callback);
    
  })
}
showView('home')


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




