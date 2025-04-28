const registerForm = document.getElementById("register");
registerForm.addEventListener("submit", onRegister);

const loginForm = document.getElementById("login");
loginForm.addEventListener("submit", onLogin);

async function onLogin(event) {
  event.preventDefault()
  const formData=new FormData(event.target)
  const email=formData.get('email')
  const password=formData.get('password')

  const response=await fetch('hhtp://localhost:3030/users/login')
  if (!response.ok) {
    const error=await response.json()
    return alert('error loging in:\n'+error.message)
   }

}

async function onRegister(event) {
  event.preventDefault();

  const formData = new FormData(event.target);

  const email = formData.get("email");
  const password = formData.get("password");
  const repass = formData.get("repass");

  if (!email || !password) {
    return alert("All fields required");
  }

  if (password != repass) {
    return alert("Paswords don't match");
  }

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

  if (!response.ok) {
    const error = await response.json();
    return alert("error:" + error.message);
  }

  const result = await response.json();
  console.log(result);
}

const token =
  "5b64e54db1486fe8c80c671126868f0039aab20aafd4b8a362233338abd5feed";

async function makeRequest() {
  const response = await fetch("http://localhost:3030/jsonstore/phonebook", {
    method: "get",
    headers: {
      "X-Authorization": token,
    },
    body:JSON.stringify()
  });

  if (!response.ok) {
   const error=await response.json()
   return alert('error creating user:\n'+error.message)
  }

  const result = await response.json();

  console.log(result);
}
