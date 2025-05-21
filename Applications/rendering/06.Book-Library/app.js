import { html, render } from "./node_modules/lit-html/lit-html.js";

function onLoad() {
  const bodyInit = document.querySelector("body");
  const menuInit = html`
    <button id="loadBooks">LOAD ALL BOOKS</button>
    <table>
      <thead>
        <tr>
          <th>Title</th>
          <th>Author</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody></tbody>
    </table>

    <form id="add-form">
      <h3>Add book</h3>
      <label>TITLE</label>
      <input type="text" name="title" placeholder="Title..." />
      <label>AUTHOR</label>
      <input type="text" name="author" placeholder="Author..." />
      <input type="submit" value="Submit" />
    </form>

    <form id="edit-form">
      <input type="hidden" name="id" />
      <h3>Edit book</h3>
      <label>TITLE</label>
      <input type="text" name="title" placeholder="Title..." />
      <label>AUTHOR</label>
      <input type="text" name="author" placeholder="Author..." />
      <input type="submit" value="Save" />
    </form>
  `;
  render(menuInit, bodyInit);

  document.getElementById("loadBooks").addEventListener("click", ()=>onFetch());
  document.getElementById("add-form").addEventListener("submit", addSubmit);

  const editForm = document.getElementById("edit-form");
  editForm.style.display = "none";

  editForm.addEventListener("submit", onSave);
}

async function addSubmit(e) {
  e.preventDefault();
  const formData = new FormData(e.currentTarget);
  const titleTxt = formData.get("title");
  const authorTxt = formData.get("author");
  if (titleTxt.trim() !== "" && authorTxt.trim() !== "") {

    const options={
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({ author: authorTxt, title: titleTxt }),
    }
    await onFetch(options);
  }

  e.target.reset();
}

async function onFetch(options, id) {
  // if (event instanceof Event) {
  //   event.preventDefault?.();
  //   event = undefined;
  // }
  console.log("onFetch called");
  const url = "http://localhost:3030/jsonstore/collections/books/";
  if (options ||id) {
    if (id) {
      await fetch(`${url}/${id}`, options);
      const response = await fetch(url)
      const data = await response.json()
      await loadBook(data)

    } else {
      await fetch(url, options);
      const response = await fetch(url)
      const data = await response.json()
      await loadBook(data)
      
    }
  } else{
    const response =  await fetch(url);
      const data = await response.json();
      await loadBook(data);
  }
}


async function loadBook(data) {
  const tBodyEl = document.querySelector("tbody");
  const booksTemplate = Object.entries(data).map(([id, book]) => {
    return html`
      <tr>
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>
          <button data-id=${id} @click=${(e) => onEdit(e, id, book)}>
            Edit
          </button>
          <button data-id=${id} @click=${() => onDelete(id)}>Delete</button>
        </td>
      </tr>
    `;
  });
  render(booksTemplate, tBodyEl);
  await new Promise((resolve) => setTimeout(resolve, 50));
}
async function onDelete(id) {
  const options = {
    method: "DELETE",
  };
  await onFetch(options, id);
}

function onEdit(e,id, book) {
  const editForm = document.getElementById("edit-form");
  const addForm = document.getElementById("add-form");

  editForm.style.display = "block";
  addForm.style.display = "none";

  editForm.elements.title.value = book.title;
  editForm.elements.author.value = book.author;
  editForm.elements.id.value = id;
}

async function onSave(e) {
  e.preventDefault();
  const formData = new FormData(e.currentTarget);
  const title = formData.get("title");
  const author = formData.get("author");
  const id = formData.get("id");

  const editForm = document.getElementById("edit-form");
  const addForm = document.getElementById("add-form");

  const options = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      title: title,
      author: author,
    }),
  };
  editForm.style.display = "none";
  addForm.style.display = "block";

  await onFetch(options, id);
}
onLoad();
