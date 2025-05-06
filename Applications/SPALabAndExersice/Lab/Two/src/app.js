import { loadParts } from "./views/list.js";
import { showView } from "./views/nav.js";

const views = {
  "home-nav": ["home"],
  "list-nav": ["list", loadParts]
};

for (let linkId in views) {
  const [sectionId,callback] = views[linkId];

  document.getElementById(linkId).addEventListener("click", (e) => {
    e.preventDefault();
    showView(sectionId, callback);
  });
}

document.getElementById("home").style.display = "block";
