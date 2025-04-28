const registerForm=document.getElementById('register')

registerForm.addEventListener('submit', onRegister)


async function onRegister(event){
  event.preventDefault()

  const formData=new FormData(event.target)

  const email=formData.get('email')
  const password=formData.get('password')
  const repass=formData.get('repass')


if(!email||!password){
  return alert('All fields required')
}

if(password!=repass){
  return alert("Paswords don't match")
}

const response=await fetch('http://localhost:3030/users/register', {
  method:'post',
  headers:{
    'Content-Type':'application/json'
  },
  body:JSON.stringify({
    email,
    password
  })
})


}