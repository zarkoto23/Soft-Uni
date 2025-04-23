function attachEvents() {
  const url = "http://localhost:3030/jsonstore/phonebook";

  const ul = document.getElementById("phonebook");
  const loadBtn = document.getElementById("btnLoad");
  const createBtn = document.getElementById("btnCreate");

  const person = document.getElementById("person");
  const phone = document.getElementById("phone");

  loadBtn.addEventListener("click", onClickLoad);
  createBtn.addEventListener("click", onCreate);

  async function onClickLoad() {
    ul.innerHTML = "";

    const response = await fetch(url);
    const data = await response.json();

    Object.values(data).forEach((e) => {
      const { person, phone, _id } = e;

      const li = createEl("li", `${person}: ${phone}`, ul);
      li.setAttribute("id", _id);

      const delBtn = createEl("button", "Delete", li);
      delBtn.setAttribute("id", "delBtn");
      delBtn.addEventListener("click", onClickDelete);
    });
  }

  async function onClickDelete(e) {
    const id = e.target.parentNode.id;
    e.target.parentNode.remove();

    const deleteResponse = await fetch(`${url}/${id}`, {
      method: "DELETE",
    });
  }

  function createEl(type, text, appender) {
    const result = document.createElement(type);
    result.textContent = text;

    appender.appendChild(result);

    return result;
  }

  async function onCreate(e) {
    if (person.value !== "" && phone.value !== "") {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ person: person.value, phone: phone.value }),
      });
      loadBtn.click()
    person.value = "";
    phone.value = "";
    }
    
  }
}

attachEvents();
