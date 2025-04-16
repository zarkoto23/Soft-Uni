const recepiesUrl = "http://localhost:3030/jsonstore/cookbook/recipes";

function loadRecepies() {
  const mainEl = document.querySelector("body > main");
  fetch(recepiesUrl)
    .then((res) => res.json())
    .then((data) => {
      mainEl.innerHTML = "";
      const recepies = Object.values(data);
      mainEl.append(...recepies.map(renderArticle));
    })
    .catch((err) => alert(err.message));
}
function renderArticle(article) {
  const h2El = document.createElement("h2");
  h2El.textContent = article.name;

  const titleDiv = document.createElement("div");
  titleDiv.classList.add("title");
  titleDiv.appendChild(h2El);

  const imgEl = document.createElement("img");
  imgEl.src = article.img;

  const smallDiv = document.createElement("div");
  smallDiv.classList.add("small");
  smallDiv.appendChild(imgEl);

  const articleEl = document.createElement("article");
  articleEl.classList.add("preview");
  articleEl.appendChild(titleDiv);
  articleEl.appendChild(smallDiv);

  return articleEl;
}

loadRecepies();

// <article class="preview">
//             <div class="title">
//                 <h2>Title</h2>
//             </div>
//             <div class="small">
//                 <img src="assets/lasagna.jpg">
//             </div>
//         </article>
