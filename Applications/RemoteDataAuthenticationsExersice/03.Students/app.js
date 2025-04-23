async function solve() {
  const url = "http://localhost:3030/jsonstore/collections/students";

  const submitBtn = document.getElementById("submit");
  const table = document.querySelector("#results tbody");
  const response = await fetch(url);
  const data = await response.json();

  Object.values(data).forEach((student) => {
    const firstName = student.firstName;
    const lastName = student.lastName;
    const facultyNumber = student.facultyNumber;
    const grade = Number(student.grade).toFixed(2);

    const tr = document.createElement("tr");
    tr.setAttribute("id", student._id);

    const firstNameCell = tr.insertCell(0);
    firstNameCell.textContent = firstName;

    const lastNameCell = tr.insertCell(1);
    lastNameCell.textContent = lastName;

    const facultyNumberCell = tr.insertCell(2);
    facultyNumberCell.textContent = facultyNumber;

    const gradeCell = tr.insertCell(3);
    gradeCell.textContent = grade;

    table.appendChild(tr);
  });

  submitBtn.addEventListener("click", onClickSubmit);

  async function onClickSubmit(e) {
    const firstNameInput = document.getElementsByName("firstName")[0];
    const LastNameInput = document.getElementsByName("lastName")[0];
    const facultyNumberInput = document.getElementsByName("facultyNumber")[0];
    const gradeInput = document.getElementsByName("grade")[0];

    const areNotEmptyInput =
      firstNameInput.value !== "" &&
      LastNameInput.value !== "" &&
      facultyNumberInput.value !== "" &&
      gradeInput.value !== "";

    if (areNotEmptyInput) {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstName: firstNameInput.value,
          lastName: LastNameInput.value,
          facultyNumber: facultyNumberInput.value,
          grade: gradeInput.value,
        }),
      });

    }
  }
}

solve()