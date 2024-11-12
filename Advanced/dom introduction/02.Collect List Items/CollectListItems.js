function extractText() {
    let liElements=document.querySelectorAll('li')

    const arr=Array.from(liElements).map(element=>element.textContent)

    const result=document.getElementById('result')

    result.value=arr.join('\n')
  }