function solve() {
  const inputEl = document.querySelector("#input");
  const output = document.querySelector("#output");
  const buttonEl = document.querySelector("#formatBtn");
  let result = "";

  const outputResult = [];
  output.innerHTML = "";
  if (inputEl.value == "") return;

  const sentences = inputEl.value.split(".").map(s=>s.trim())
  .filter(s=>s.length>0)
  console.log(sentences)

  for (let i = 0; i < sentences.length; i += 3) {
    result += sentences[i] + ".";
    if (sentences[i + 1]) {
      result += sentences[i + 1] + ".";
    }
    if (sentences[i + 2]) {
      result += sentences[i + 2] + ".";
    }
    outputResult.push(`<p>${result}</p>`);
    result = "";
  }
  output.innerHTML = outputResult.join('');
}
