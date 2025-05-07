document.querySelector('#logout-nav').addEventListener('click',logOut)

function logOut(event){
event.preventDefault()
  localStorage.clear()
  alert('You are logged out!')
  window.location='/'
}