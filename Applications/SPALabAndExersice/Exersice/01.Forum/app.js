const time=formatDate(new Date())



document.querySelector(".container form").addEventListener("submit", onSubmit);

async function onSubmit(event) {
  event.preventDefault();
  const form = event.target;
  const formData = new FormData(event.target);
  const title = formData.get("topicName");
  const name = formData.get("username");
  const post = formData.get("postText");
  

  form.reset();

  const sendData = await fetch(
    "http://localhost:3030/jsonstore/collections/myboard/posts",
    {
      method: "post",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        title,
        name,
        post,
        time
        
      }),
    }
  );

  if (!sendData.ok) {
    alert("Unsucesfull Operation");
    return;
  }

  
  
}

async function onLoad() {
  const response = await fetch(
    "http://localhost:3030/jsonstore/collections/myboard/posts");
  const data = await response.json();
  Object.values(data).forEach(data=>{

    const topicTitleEl=document.querySelector('.topic-title')
    const topicContainerEl=document.querySelector('.topic-container')


    
    const commentDiv=document.createElement('div')
    commentDiv.classList.add('comment')

    const headerDiv=document.createElement('div')
    headerDiv.classList.add('header')

    const imgEl=document.createElement('img')
    imgEl.src='./static/profile.png'
    imgEl.alt='avatar'

    const pEl=document.createElement('p')

    const spanEl=document.createElement('span')
    spanEl.textContent=data.name+' posted on '

    const timeEl=document.createElement('time')
    timeEl.textContent=data.time

    const postContentPEl=document.createElement('p')
    postContentPEl.classList.add('post-content')
    postContentPEl.textContent=data.post

    pEl.appendChild(spanEl)
    pEl.appendChild(timeEl)


    headerDiv.append(imgEl, pEl, postContentPEl)
    commentDiv.appendChild(headerDiv)
    topicTitleEl.appendChild(commentDiv)
  });
}


function formatDate(date) {
  const pad = (num) => num.toString().padStart(2, '0');
  return [
    date.getFullYear(),
    pad(date.getMonth() + 1),
    pad(date.getDate())
  ].join('-') + ' ' + [
    pad(date.getHours()),
    pad(date.getMinutes()),
    pad(date.getSeconds())
  ].join(':');
}

onLoad()


