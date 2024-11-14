function search() {
   const townsEl=document.querySelector('#towns')
   const searchEl=document.querySelector('#searchText')
   const resultEl=document.querySelector('#result')


   const searchStr=searchEl.value.toLowerCase()

   if(searchStr==''){
    return
   }

   const townArr=Array.from(townsEl.children)
   const towns=townArr.map(el=>el.textContent.toLowerCase())

   townArr.forEach(el=>{
    el.style.fontWeigth='normal'
    el.style.textDecoration='none'
   })


   let result=[]

   for(let i=0;i<towns.length;i++){
    if(towns[i].toLowerCase().indexOf(searchStr)>=0){
      result.push(i)
    }
   }
   result.forEach(position=>{
    townsEl.children[position].style.fontWeigth='bold'

    townsEl.children[position].style.textDecoration='underline'
   })

   console.log(result)
   resultEl.textContent=`${result.length} matches found`

   searchEl.value=''
   
} 
