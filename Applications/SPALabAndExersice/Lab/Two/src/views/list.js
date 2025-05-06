

async function loadParts() {
  const response= await fetch('http://localhost:3030/data/autoparts')
  const data=await response.json()
  showParts(data)
  
}

function showParts(data){

  const ul=document.getElementById('parts')
  ul.textContent=''
  data.forEach(element => {
    const li = document.createElement('li')
    li.textContent=`${element.label} - $${element.price}\n`

    li.addEventListener('click',(e)=>
    console.log(e.label))

    ul.appendChild(li)
  });

}




export {
  loadParts
}