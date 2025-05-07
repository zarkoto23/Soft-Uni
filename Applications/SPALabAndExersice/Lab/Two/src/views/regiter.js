document.querySelector("#register form").addEventListener("submit", onRegister);

function onRegister(event) {
  event.preventDefault();

  const formData = new FormData(event.target);
  const email = formData.get("email");
  const password = formData.get("password");
  const repass = formData.get("repass");

  if (!email || !password || !repass) {
    alert("All fields should be not-empty");
    return;
  }

  if (password !== repass) {
    alert("Passwords don't match");
    return;
  }

  sendRequest(email, password);
}

async function sendRequest(email, password) {
  const response = await fetch("http://localhost:3030/users/register", {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email,
      password,
    }),
  });

  const data = await response.json();
  const accessToken = data.accessToken;

  localStorage.setItem("accessToken", accessToken);
  alert("Your Registration is Succesfull");
  window.location = "/";
}
