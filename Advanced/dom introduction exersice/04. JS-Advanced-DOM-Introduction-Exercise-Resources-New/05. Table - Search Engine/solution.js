function solve() {
  document.querySelector("#searchBtn").addEventListener("click", onClick);

  function onClick() {
 const trElements=document.querySelectorAll('tbody tr')
const searchInput=document.querySelector('#searchField')
const searchStr=searchInput.value.toLowerCase()
const result=[]
const info=[...trElements].map(el=> el.innerText.toLowerCase())

trElements.forEach(el=>{
  el.classList.remove('select')
})

if(searchStr=='') return

for(let i=0;i<info.length;i++){
  if(info[i].indexOf(searchStr)>=0){ 
    result.push(i)
  }
}
result.forEach((position)=>{
  trElements[position].classList.add('select')
})
searchInput.value=''


console.log(result)

  }
}
