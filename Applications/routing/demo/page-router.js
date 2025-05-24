import page from "https://unpkg.com/page/page.mjs";

document.querySelector("button").addEventListener("click", onLogin);

function onLogin() {
  page.redirect("/catalog");
}

// page((ctx, next)=>{console.log('userNav'); next()})
page('/index.html', '/')
page('/home', '/')
page('/', () => showView("home"));
page("/catalog", () => showView("catalog"));
page("/about", () => showView("about"));
page("/login", () => showView("login"));

page("/details/:id", (context) => showView("details",context));




page.start();

function showView(id,event) {
  document.querySelectorAll("section").forEach((s) => {
    s.style.display = s.id == id ? "block" : "none";
  });
  
  const productId=event?.params.id
  

  if(productId){
    document.querySelector('p').textContent='product details'+productId
  }
}
