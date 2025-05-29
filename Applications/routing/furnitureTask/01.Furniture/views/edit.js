import { html, render } from '../../node_modules/lit-html/lit-html.js';
import page from '../../node_modules/page/page.mjs';
import { dataUrl } from './constant.js';

const mainEl = document.querySelector('main');

export async function showEditPage(ctx) {
  const id = ctx.params.id;

  try {
    const response = await fetch(dataUrl + id);
    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message);
    }

    const resData = await response.json();

    render(editTemplate(resData, onSubmit), mainEl);

    function onSubmit(e) {
      e.preventDefault();

      const formData = new FormData(e.target);
      const data = Object.fromEntries(formData.entries());

      if (Object.values(data).some(v => v === '')) {
        return alert('All fields except material are required!');
      }

      fetch(dataUrl + id, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'X-Authorization': localStorage.getItem('token')
        },
        body: JSON.stringify(data)
      })
      .then(res => {
        if (!res.ok) {
          return res.json().then(err => { throw new Error(err.message) });
        }
        page.redirect(`/details/${id}`);
      })
      .catch(err => alert(err.message));
    }

  } catch (err) {
    alert(err.message);
  }
}

function editTemplate(item, onSubmit) {
  return html`
    <div class="container">
      <div class="row space-top">
        <div class="col-md-12">
          <h1>Edit Furniture</h1>
          <p>Please fill all fields.</p>
        </div>
      </div>
      <form @submit=${onSubmit}>
        <div class="row space-top">
          <div class="col-md-4">
            <div class="form-group">
              <label class="form-control-label" for="new-make">Make</label>
              <input class="form-control" id="new-make" type="text" name="make" value=${item.make}>
            </div>
            <div class="form-group">
              <label class="form-control-label" for="new-model">Model</label>
              <input class="form-control" id="new-model" type="text" name="model" value=${item.model}>
            </div>
            <div class="form-group">
              <label class="form-control-label" for="new-year">Year</label>
              <input class="form-control" id="new-year" type="number" name="year" value=${item.year}>
            </div>
            <div class="form-group">
              <label class="form-control-label" for="new-description">Description</label>
              <input class="form-control" id="new-description" type="text" name="description" value=${item.description}>
            </div>
          </div>
          <div class="col-md-4">
            <div class="form-group">
              <label class="form-control-label" for="new-price">Price</label>
              <input class="form-control" id="new-price" type="number" name="price" value=${item.price}>
            </div>
            <div class="form-group">
              <label class="form-control-label" for="new-image">Image</label>
              <input class="form-control" id="new-image" type="text" name="img" value=${item.img}>
            </div>
            <div class="form-group">
              <label class="form-control-label" for="new-material">Material (optional)</label>
              <input class="form-control" id="new-material" type="text" name="material" value=${item.material || ''}>
            </div>
            <input type="submit" class="btn btn-info" value="Edit" />
          </div>
        </div>
      </form>
    </div>
  `;
}
