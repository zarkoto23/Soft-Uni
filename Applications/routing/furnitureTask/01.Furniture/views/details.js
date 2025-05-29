import { html, render } from '../../node_modules/lit-html/lit-html.js';
import page from '../../node_modules/page/page.mjs';
import { dataUrl } from './constant.js';
import { onDelete } from '../app.js';

const mainEl = document.querySelector('main');

export async function showDetailsPage(ctx) {
  const id = ctx.params.id; // ID от URL (например: /details/:id)

  try {
    const response = await fetch(dataUrl + id);
    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message);
    }

    const resData = await response.json();
    render(detailsTemplate(resData, ctx), mainEl); // подаваме ctx тук
  } catch (err) {
    alert(err.message);
  }
}

export function detailsTemplate(resData, ctx) {
  const isTrue = localStorage.getItem('id') === resData._ownerId;

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
              <img src=${resData.img} />
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <p>Make: <span>${resData.make}</span></p>
          <p>Model: <span>${resData.model}</span></p>
          <p>Year: <span>${resData.year}</span></p>
          <p>Description: <span>${resData.description}</span></p>
          <p>Price: <span>${resData.price}</span></p>
          <p>Material: <span>${resData.material}</span></p>

          ${isTrue
            ? html`
                <div>
                  <a class="btn btn-info" href="/edit/${resData._id}">Edit</a>
                  <a
                    @click=${(e) => onDelete(e, resData, ctx)}
                    href="javascript:void(0)"
                    class="btn btn-red"
                  >Delete</a>
                </div>`
            : null}
        </div>
      </div>
    </div>
  `;
}
