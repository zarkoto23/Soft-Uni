import { html, render } from "../../node_modules/lit-html/lit-html.js";
import page from "../../node_modules/page/page.mjs";
import { util } from "./home.js";
const mainEl = document.querySelector("main");


export async function showProfile(){
  
  const respone=await fetch(`http://localhost:3030/data/catalog?where=_ownerId%3D%22${util.id}%22`)
  const data=await respone.json()
  



  render(templateProfile(data),mainEl)
}

function templateProfile(data){
  return html`
  <div class="container">
    <div class="row space-top">
        <div class="col-md-12">
            <h1>My Furniture</h1>
            <p>This is a list of your publications.</p>
        </div>
    </div>
    <div class="row space-top">

        ${data.map((el)=> html` 
        <div class="col-md-4">
            <div class="card text-white bg-primary">
                <div class="card-body">
                        <img src="${el.img}" />
                        <p>${el.description}</p>
                        <footer>
                            <p>Price: <span>${el.price} $</span></p>
                        </footer>
                        <div>
                            <a href="/details/${el._id}" class="btn btn-info">Details</a>
                        </div>
                </div>
            </div>
        </div>
        `)}
    



    </div>
</div>
  `
}



