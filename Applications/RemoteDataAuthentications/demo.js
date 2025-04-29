const registerForm = document.getElementById("register");
registerForm.addEventListener("submit", onRegister);

const loginForm = document.getElementById("login");
loginForm.addEventListener("submit", onLogin);

async function onLogin(event) {
  event.preventDefault()
  const formData=new FormData(event.target)
  const email=formData.get('email')
  const password=formData.get('password')

  const response=await fetch('http://localhost:3030/users/login', {
    method:'post',
    headers:{
      'Content-Type':'application/json'
    },
    body:JSON.stringify({
      email,
      password
    })
  })
  if (!response.ok) {
    const error=await response.json()
    return alert('error loging in:\n'+error.message)
   }

   const result=await response.json()
  localStorage.setItem('accessToken',result.accessToken)


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
  localStorage.setItem('accessToken',result.accessToken)
}


async function makeRequest(event) {

  const options= {
    method: "get",
    headers:{},
    
  }

  const accessToken=localStorage.getItem('accessToken')
  if(accessToken){
    options.headers['X-Authorization']=accessToken
  }

  const response = await fetch("http://localhost:3030/jsonstore/phonebook", options);

  if (!response.ok) {
   const error=await response.json()
   return alert('error creating user:\n'+error.message)
  }

  const result = await response.json();

  console.log(result);
}
