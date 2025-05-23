
window.addEventListener('hashchange', onHashChange)
document.querySelector('button').addEventListener('click',onLogin)

function onLogin(){
  window.location.hash='#catalog-section'
}



function onHashChange(){
  const {hash}=window.location
  if(hash=='#home-section'){
    showView('home')
  }else if(hash=='#catalog-section'){
    showView('catalog')
  }else if(hash=='#about-section'){
    showView('about')
  }
 else if(hash=='#login-section'){
    showView('login')
  }
  
  console.log(window.location.hash);
  
}
function showView(id){
  document.querySelectorAll('section').forEach(s=>{
    s.style.display=s.id==id ? 'block': 'none'
  })
}

onHashChange()
