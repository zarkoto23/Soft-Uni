export function showView(sectionId, callback, param){

  document.querySelectorAll('section').forEach(section=>{
    section.style.display='none'

  })
  document.getElementById(sectionId).style.display='block'

  if(callback){
    callback(param)
  }
}
