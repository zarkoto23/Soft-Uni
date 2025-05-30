import { html, render } from "../node_modules/lit-html/lit-html.js"
import { util } from "./home.js"
import { onDelete } from "../app.js"


const mainEl=document.querySelector('main')



export async function showDetails(ctx){
  const productId=ctx.params.id

  const response=await fetch(util.dataUrl+productId)
  const data=await response.json()
 
  render(detailsTemplate(data),mainEl)
  
}


function detailsTemplate(data){
  
  const isOwner= data._ownerId===util.id
  return html`
  <div class="container">
    <div class="row space-top">
        <div class="col-md-12">
            <h1>Furniture Details</h1>
        </div>
    </div>
    <div class="row space-top">
        <div class="col-md-4">
            <div class="card text-white bg-primary">
                <div class="card-body">
                    <img src="${data.img}"/>
                </div>
            </div>
        </div>
        <div class="col-md-4">
            <p>Make: <span>${data.make}</span></p>
            <p>Model: <span>${data.model}</span></p>
            <p>Year: <span>${data.year}</span></p>
            <p>Description: <span>${data.description}</span></p>
            <p>Price: <span>${data.price}</span></p>
            <p>Material: <span>${data.material}</span></p>
            <div>
              ${isOwner ? html`
                <a href="/edit/${data._id}" class="btn btn-info">Edit</a>
                <a @click=${()=>onDelete(data)} class="btn btn-red">Delete</a>
                `:null}
            </div>
        </div>
    </div>
</div>
  `
}



