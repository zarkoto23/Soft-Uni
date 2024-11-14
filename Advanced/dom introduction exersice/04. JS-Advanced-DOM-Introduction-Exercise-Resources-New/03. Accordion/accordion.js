function toggle() {
  const buttonEl=document.querySelector('.button');
  const extraEl=document.querySelector('#extra')
  const initalDisplay=extraEl.style.display;  

  if(initalDisplay=='block'){
    extraEl.style.display='none'
    buttonEl.textContent='More'
  }else{
    extraEl.style.display='block'
    buttonEl.textContent='LESS'
  }
  
}