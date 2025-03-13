function notify(message) {
  const getNotifiedEl=document.querySelector('#notification')
  getNotifiedEl.textContent=message
  getNotifiedEl.style.display='block'

  getNotifiedEl.addEventListener('click',()=>{
    getNotifiedEl.style.display='none'
  })


}