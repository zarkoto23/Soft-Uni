window.addEventListener("popstate", onPopState);

document.addEventListener("click", onClick);

document.querySelector("button").addEventListener("click", onLogin);

function onLogin() {
  window.history.pushState({}, "", "/catalog");
  onPopState();
}

function onClick(ev) {
  if (ev.target.tagName === "A") {
    ev.preventDefault();
    window.history.pushState({}, "", ev.target.href);
    onPopState();
  }
}

function onPopState() {
  console.log(window.location.pathname);
  const { pathname } = window.location;
  if (pathname == "/home") {
    showView("home");
  } else if (pathname == "/catalog") {
    showView("catalog");
  } else if (pathname == "/about") {
    showView("about");
  } else if (pathname == "/login") {
    showView("login");
  }
}

function showView(id) {
  document.querySelectorAll("section").forEach((s) => {
    s.style.display = s.id == id ? "block" : "none";
  });
}

onPopState();
