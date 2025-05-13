import { post } from "../data/api.js";
import { createSubmitHandler, setUserData } from "../util.js";

const loginHandler = createSubmitHandler(onLogin);

document.querySelector("#login form").addEventListener("submit", loginHandler);

async function onLogin({ email, password }, form) {
  const userData = await post("/users/login", {
    email,
    password,
  });

  setUserData(userData);

  form.reset();
  window.location = "/";
}
