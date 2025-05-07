
document.querySelector('#register form').addEventListener('submit',onRegister)

function onRegister(event){
  event.preventDefault()
  
  const formData=new FormData(event.target)
  const email=formData.get('email')
  const pass=formData.get('password')
  const repass=formData.get('repass')

  if(email)


  if(pass!==repass){
    alert("Passwords don't match")
  }
}