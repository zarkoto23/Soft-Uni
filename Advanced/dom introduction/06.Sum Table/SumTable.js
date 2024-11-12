function sumTable() {
  let total=0
  const prices = document.querySelectorAll('td:nth-child(2):not(#sum)'); 
  for(el of prices){
    total+=Number(el.textContent)
  }
  const sum=document.querySelector('#sum')
  sum.textContent=total

}
