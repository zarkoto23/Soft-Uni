async function getInfo() {
    const stopNameElement=document.getElementById('stopName')
    const timeTableElement=document.getElementById('buses')
    const submitBtn=document.getElementById('submit')
    const stopId=document.getElementById('stopId').value
    
    const url=`http://localhost:3030/jsonstore/bus/businfo/${stopId}`

    try {
      stopNameElement.textContent='Loading...'
      timeTableElement.replaceChildren()
      submitBtn.disabled=true

      const res=await fetch(url)

      if(res.status!==200){
        throw Error('stop ID is not found')

      }
      const data=await res.json()
      

      
    } catch (error) {
      
    }


}