import { showView } from "./views/nav.js";

const views = {
  "home-nav": "home",
  "list-nav": "list",
};

for (let linkId in views) {
  const sectionId = views[linkId];

  document.getElementById(linkId).addEventListener("click", (e) => {
    e.preventDefault();
    showView(sectionId);
  });
}

document.getElementById("home").style.display = "block";
