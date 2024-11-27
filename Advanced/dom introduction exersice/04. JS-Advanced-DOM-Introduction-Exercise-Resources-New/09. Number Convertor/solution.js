function solve() {
  const output = document.querySelector("#result");
  const selectElConvert = document.querySelector("#selectMenuTo");
  const optionSelectElConvertTo = document.createElement("option");
  optionSelectElConvertTo.setAttribute("value", "hexadecimal");
  optionSelectElConvertTo.textContent = "Hexadecimal";

  const optionSelectElConvertToDec = document.createElement("option");
  optionSelectElConvertToDec.setAttribute("value", "binary");
  optionSelectElConvertToDec.textContent = "Binary";

  selectElConvert.appendChild(optionSelectElConvertToDec);
  selectElConvert.appendChild(optionSelectElConvertTo);

  document.querySelector("#container button").addEventListener("click", (e) => {
    const input = Number(document.querySelector("#input").value);
    if (selectElConvert.value == "binary") {
      output.value = input.toString(2);
    } else if (selectElConvert.value == "hexadecimal") {
      output.value = input.toString(16).toUpperCase();
    }
  });
}
