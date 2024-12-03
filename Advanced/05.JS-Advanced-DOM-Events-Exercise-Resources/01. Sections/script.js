function create(words) {
  const contentDivEl = document.querySelector("#content");

  words.forEach((word) => {
    const newDiv = document.createElement("div");
    const newP = document.createElement("p");
    newP.textContent = word;
    newDiv.appendChild(newP);
    contentDivEl.appendChild(newDiv);
    newP.style.display = "none";

    newDiv.addEventListener("click", (e) => {
      newP.style.display = "inline";
    });
  });
}
