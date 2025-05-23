import page from "../node_modules/page/page.mjs

function showView(id) {
  document.querySelectorAll("section").forEach((s) => {
    s.style.display = s.id == id ? "block" : "none";
  });
}
