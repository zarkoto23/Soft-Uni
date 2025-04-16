const loginForm = document.querySelector("main article form");
const baseUrl='http://localhost:3030/users'

loginForm.addEventListener("submit", (e) => {

  e.preventDefault();
  const {email, password}=Object.fromEntries(new FormData(e.currentTarget))

 fetch(`${baseUrl}/login`,{
  method:'POST',
  body:JSON.stringify({
    email,
    password
  }),
  headers:{
    'Content-Type':'application/json'
  }
 })
 .then(res=>{
  if(!res.ok){
    return res.json().then(err=>{
      throw new Error(err.message)
    })
  }
  return res.json()
 })
 .then(data=>{
  console.log(data)
  
  localStorage.setItem('accessToken',data.accessToken)
  localStorage.setItem('email',data.email)
  location.href='/'
 })
 .catch(err=>alert(err.message))
});
