function loadRepos() {
  const repostUl=document.getElementById('repos')
	const username=document.getElementById('username').value
  const url=`https://api.github.com/users/${username}/repos`

  fetch(url)
    .then(res=>res.json())
    .then(repos=>{

      repostUl.innerHTML=''
      
      
      repos.forEach(repo => {
      
      const aEl=document.createElement('a')
      aEl.href=repo.html_url
      aEl.textContent=repo.full_name

      const liEl=document.createElement('li')
      liEl.appendChild(aEl)
      repostUl.appendChild(liEl)
    })})
    .catch(err=>console.log(err))
  }

