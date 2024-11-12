function extract(content) {

  const txt=document.querySelector('#content').textContent

  const regex=/\(([^\(\)]+)\)/g;
  const matches=txt.matchAll(regex)

 let asd= Array.from(matches).map(match=>match[1])

  return asd.join('; ')
  
  

  
}

