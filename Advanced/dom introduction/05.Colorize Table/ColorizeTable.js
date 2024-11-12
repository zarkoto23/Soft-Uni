function colorize() {
    const even=document.querySelectorAll('tr:nth-child(2n+2)')
    even.forEach(row=>{row.style.backgroundColor='teal'})


}