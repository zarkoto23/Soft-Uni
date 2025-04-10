function attachEvents() {
  const postsUrl='http://localhost:3030/jsonstore/blog/posts'
  const commentsUrl='http://localhost:3030/jsonstore/blog/comments'

  let btnLoadPosts=document.getElementById('btnLoadPosts')
  let postsSelect=document.getElementById('posts')
  let btnViewPosts=document.getElementById('btnViewPost')
  let postTitle=document.getElementById('post-title')
  let postContent=document.getElementById('post-body')

  btnLoadPosts.addEventListener('click',handleLoadPosts)

  btnViewPosts.addEventListener('click',handleViewPosts)

  let commonData;

  
  function handleLoadPosts(){
    fetch(postsUrl)
    .then(res=>res.json())
    .then(data=>addPost(data))


    function addPost(data){
      commonData=data
      postsSelect.innerHTML=''
      
      for(let [id, postInfo] of Object.entries(data)){
        let option=document.createElement('option')
        option.value=id
        option.textContent=postInfo.title
        option.dataset.body=postInfo.body
        postsSelect.appendChild(option)

      }
    }

  }


  function handleViewPosts(){
    
    let selectedPostId=document.getElementById('posts').value
    postTitle.textContent=commonData[selectedPostId].title
    postContent.textContent=commonData[selectedPostId].body

    fetch(commentsUrl)
    .then(res=>res.json())
    .then(data=>handleComment(data))

    function handleComment(data){
      let commentsUi=document.getElementById('post-comments')
      commentsUi.innerHTML=''
      for(let [commentInfo, second] of Object.entries(data)){
        let li=document.createElement('li')
        li.id=second.id
        li.textContent=second.text

        commentsUi.appendChild(li)
      }
    }


  }
  
}

attachEvents();