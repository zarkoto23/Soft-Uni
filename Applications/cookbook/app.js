const recepiesUrl = "http://localhost:3030/data/recipes";
const mainEl = document.querySelector("body > main");

function initNavigation(){


 const email=localStorage.getItem('email')
 if(email&&email!=='undefined'){
 const userNavigation=document.getElementById('user')
userNavigation.style.display='block'

  
 }else{
 const guestNavigation=document.getElementById('guest')

 guestNavigation.style.display='block'
 }
}

function loadRecepies() {
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

  articleEl.addEventListener("click", async (e) => {
    const response = await fetch(`${baseUrl}/${article._id}`);
    const articleDetailes = await response.json();
    const articleDetailsElement = renderDetaledArticle(articleDetailes);
    mainEl.innerHTML = "";
    mainEl.appendChild(articleDetailsElement);
  });

  return articleEl;
}

function renderDetaledArticle(article) {
  const articleEl = document.createElement("article");
  articleEl.innerHTML = `
            <h2>${article.name}</h2>
            <div class="band">
                <div class="thumb">
                    <img src=${article.img}>
                </div>
                <div class="ingredients">
                    <h3>Ingredients:</h3>
                    <ul>
                        ${article.ingredients
                          .map((i) => `<li>${i}</li>`)
                          .join("\n")}
                    </ul>
                </div>
            </div>
            <div class="description">
                <h3>Preparation:</h3>
                ${article.steps.map((step) => `<p>${step}</p>`).join("\n")}
            </div>`;
  return articleEl;
}

loadRecepies();
initNavigation()
