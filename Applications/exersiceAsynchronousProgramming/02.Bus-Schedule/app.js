function solve() {

  const label=document.querySelector('.info')
  const departBtn=document.getElementById('depart')
  const arriveBtn=document.getElementById('arrive')

  let stop={
    next:'depot',
  }
  
  async function depart() {
    departBtn.disabled=true
    const url=`http://localhost:3030/jsonstore/bus/schedule/${stop.next}`
    const res=await fetch(url)

    if(res.status!==200){
      label.textContent='Error---'
      departBtn.disabled=true
      arriveBtn.disabled=true
    }
    stop=await res.json()
    label.textContent=`Next Stop: ${stop.name}`
    arriveBtn.disabled=false
    }

    function arrive() {
      label.textContent=`Arriving at: ${stop.name}`
      arriveBtn.disabled=true
      departBtn.disabled=false
    }

    return {
        depart,
        arrive
    };
}

let result = solve();



//http://localhost:3030/jsonstore/bus/schedule/:id 