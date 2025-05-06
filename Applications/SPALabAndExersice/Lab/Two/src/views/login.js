document.querySelector("#login form").addEventListener("submit", login);

async function login(event) {
  event.preventDefault();

  const formData = new FormData(event.target);
  const email = formData.get("email");
  const password = formData.get("password");

  const response = await fetch("http://localhost:3030/users/login", {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });

  if (!response.ok) {
    const error = await response.json();
    return alert(`ALERT: ${error.message}`);
  }
  const userData = await response.json();
  localStorage.userId = userData._id;
  localStorage.accessToken = userData.accessToken;
  localStorage.pass = userData.email;

  console.log(localStorage);

  window.location = "/";
}
