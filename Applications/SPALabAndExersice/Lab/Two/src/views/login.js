document.querySelector('#login form').addEventListener('submit',login)

async function login(e){
  e.preventDefault()
  const formData=new FormData(e.target)
  const email=formData.get('email')
  const password=formData.get('password')

  
}