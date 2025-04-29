export function showHomeView() {
  document
    .querySelectorAll("section")
    .forEach((s) => (s.style.display = "none"));
  document.getElementById("home").style.display = "block";
}
