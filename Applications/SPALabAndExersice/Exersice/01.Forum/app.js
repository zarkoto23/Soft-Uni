const time = formatDate();

document.querySelector("form").addEventListener("submit", onSubmit);

document.querySelector(".cancel").addEventListener("click", onCancel);

function onCancel(event) {
  event.preventDefault();
  const form = event.target.closest("form");
  form.reset();
}

async function onSubmit(event) {
  event.preventDefault();

  console.log("submit");

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
        time,
      }),
    }
  );

  if (!sendData.ok) {
    alert("Unsucesfull Operation");
    return;
  }

  onLoad();
}

async function onLoad() {
  const topicTitleEl = document.querySelector(".topic-title");
  const topicContainerEl = document.querySelector(".topic-container");
  topicContainerEl.textContent = "";
  topicTitleEl.textContent = "";

  const response = await fetch(
    "http://localhost:3030/jsonstore/collections/myboard/posts"
  );
  const data = await response.json();
  Object.values(data).forEach((data) => {
    const containerDiv = document.querySelector(".container");
    containerDiv.classList.add("container");
  });
}

function formatDate() {
  const currentDate = new Date();
  const isoString = currentDate.toISOString();
  return isoString;
}

onLoad();

// const commentDiv=document.createElement('div')
// commentDiv.classList.add('comment')

// const headerDiv=document.createElement('div')
// headerDiv.classList.add('header')

// const imgEl=document.createElement('img')
// imgEl.src='./static/profile.png'
// imgEl.alt='avatar'

// const pEl=document.createElement('p')

// const spanEl=document.createElement('span')
// spanEl.textContent=data.name+' posted on '

// const timeEl=document.createElement('time')
// timeEl.textContent=data.time

// const postContentPEl=document.createElement('p')
// postContentPEl.classList.add('post-content')
// postContentPEl.textContent=data.post

// pEl.appendChild(spanEl)
// pEl.appendChild(timeEl)

// headerDiv.append(imgEl, pEl, postContentPEl)
// commentDiv.appendChild(headerDiv)
// topicContainerEl.appendChild(commentDiv)

//   const nameWraperEl= document.createElement('div')
//   nameWraperEl.classList.add('topic-name-wraper')

//   const topicNameEl=document.createElement('div')
//   topicNameEl.classList.add('topic-name')

//   const normalEl=document.createElement('a')
//   normalEl.classList.add('normal')
//   normalEl.setAttribute('href','#')

//   const h2El=document.createElement('h2')
//   h2El.textContent=data.title

//   const columsDiv=document.createElement('div')
//   columsDiv.classList.add('columns')

//   const infoDiv=document.createElement('div')

//   const pEl=document.createElement('p')
//   pEl.textContent='Date: '

//   const timeEl=document.createElement('time')
//   timeEl.textContent=data.time

//   const userNickDivEl=document.createElement('div')
//   userNickDivEl.classList.add('nick-name')

//   const userNamePEl=document.createElement('p')
//   userNamePEl.textContent='Username: '

//   const nameSpanEl=document.createElement('span')
//   nameSpanEl.textContent=data.name

//   normalEl.appendChild(h2El)
//   topicNameEl.appendChild(normalEl)

//  userNamePEl.appendChild(nameSpanEl)
//  userNickDivEl.appendChild(userNamePEl)

//  pEl.appendChild(timeEl)

//  infoDiv.append(pEl, userNickDivEl)
//  columsDiv.appendChild(infoDiv)

//  topicNameEl.appendChild(columsDiv)

//  nameWraperEl.appendChild(topicNameEl)
//  topicContainerEl.appendChild(nameWraperEl)
