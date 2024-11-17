function solve() {
  const inputEl = document.querySelector("#input");
  const outputEl = document.querySelector("#output");
  const buttonEl = document.querySelector("#formatBtn"); //

  if (inputEl.value == "") {
    return;
  }

  const sentencesPerParagraph = 3;
  const sentences = inputEl.value.split(". ");
  const numberOfParagraph = Math.ceil(sentences.length / sentencesPerParagraph);

  let output = "";
  for (let i = 0; i < numberOfParagraph; i++) {
    const p = i * numberOfParagraph;
    const text = sentences.slice(p, p + sentencesPerParagraph).join(". ");
    output += `<p>${text}</p>`;
  }

  outputEl.innerHTML = output;
}
