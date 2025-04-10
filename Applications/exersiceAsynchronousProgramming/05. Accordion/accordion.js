async function solution() {
  const main = document.getElementById("main");

  const url = `http://localhost:3030/jsonstore/advanced/articles/list`;

  const res = await fetch(url);
  const data = await res.json();

  data.forEach((topick) => {
    let divAccordion = createElement("div","", ["class", "accordion"]);
    let divHead = createElement("div","", ["class", "head"]);
    let span = createElement("span", topick.title);
    let button = createElement("button", "More", [
      "class",
      "button",
      "id",
      topick._id,
    ]);
    let divXtra = createElement("div", "", ["class", "extra"]);
    let p = createElement("p");

    button.addEventListener("click", toggle);


    divHead.appendChild(span)
    divHead.appendChild(button)
    divXtra.appendChild(p)
    divAccordion.appendChild(divHead)
    divAccordion.appendChild(divXtra)
    main.appendChild(divAccordion)
  });

  async function toggle(e){
    const accordion=e.target.parentNode.parentNode
    const p=accordion.querySelector('.extra p')
    const extra=accordion.querySelector('.extra')

    const id=e.target.id
    const url=`http://localhost:3030/jsonstore/advanced/articles/details/${id}`

    const res=await fetch(url)
    const data=await res.json()
    console.log(accordion)

    console.log(data)
    p.textContent=data.content

    const hidden=e.target.textContent==='More'
    extra.style.display=hidden ? 'block':'none'
    e.target.textContent=hidden ? 'Less':'More'

  }

  function createElement(type, content, attributes = []) {
    const element = document.createElement(type);
    if (content) {
      element.textContent = content;
    }
    if (attributes.length > 0) {
      for (let i = 0; i < attributes.length; i += 2) {
        element.setAttribute(attributes[i], attributes[i + 1]);
    }
  }

    return element;
}
}

window.addEventListener("load", solution);
