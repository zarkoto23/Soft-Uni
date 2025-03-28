window.addEventListener("load", solve);

function solve() {
  const testRideForm = [...document.querySelectorAll("select, input")];
  const testRideButton = document.querySelector("#test-ride-btn");
  const previewList = document.querySelector("#preview-list");
  const completeList = document.querySelector("#complete-list");

  testRideButton.addEventListener("click", (e) => {
    e.preventDefault();

    if (testRideForm.some((el) => el.value.trim() === "")) {
      return;
    }
    const liElement = document.createElement("li");
    liElement.classList.add("preview-item");

    let formData = {};

    testRideForm.forEach((field) => {
      let fieldName = "";
      if (field.id === "colors") {
        fieldName = "Color: ";
      } else if (field.id === "motorcycles") {
        fieldName = "Model: ";
      } else if (field.id === "datetime") {
        fieldName = "Test Ride On: ";
      } else if (field.id === "full-name") {
        fieldName = "For: ";
      } else if (field.id === "email") {
        fieldName = "Contact: ";
      }

      const pElement = document.createElement("p");
      pElement.textContent = `${fieldName}${field.value}`;
      liElement.appendChild(pElement);

      formData[field.id] = field.value;
    });

    previewList.appendChild(liElement);
    testRideButton.disabled = true;

    testRideForm.forEach((field) => (field.value = ""));

    addEditAndNext(liElement, formData);
  });

  function addEditAndNext(liElement, formData) {
    const editBtn = document.createElement("button");
    editBtn.classList.add("edit-btn");
    editBtn.textContent = "Edit";
    editBtn.addEventListener("click", (e) => {
      testRideForm.forEach((field) => {
        if (formData[field.id]) {
          field.value = formData[field.id];
        }
      });
      liElement.remove();

      testRideButton.disabled = false;
    });

    const nextBtn = document.createElement("button");
    nextBtn.classList.add("next-btn");
    nextBtn.textContent = "Next";
    nextBtn.addEventListener("click", (e) => {
      moveToComplete(liElement);
    });

    const divEl = document.createElement("div");
    divEl.classList.add("btn-container");
    divEl.appendChild(editBtn);
    divEl.appendChild(nextBtn);
    liElement.appendChild(divEl);
    previewList.appendChild(liElement);
  }

  function moveToComplete(liElement) {
    liElement.querySelector(".btn-container").remove();
    const completeBtn = document.createElement("button");
    completeBtn.classList.add("complete-btn");
    completeBtn.textContent = "Complete";

    completeBtn.addEventListener("click", (e) => {
      liElement.remove();
      confirm();
    });

    liElement.appendChild(completeBtn);
    completeList.appendChild(liElement);
  }

  function confirm() {
    const confirmBtn = document.createElement("button");
    confirmBtn.classList.add("confirm-btn");
    confirmBtn.textContent = "Your Test Ride is Confirmed";

    confirmBtn.addEventListener("click", (e) => {
      location.reload();
    });

    completeList.appendChild(confirmBtn);
  }
}
