function encodeAndDecodeMessages() {
  const btns = document.querySelectorAll("button");
  const areas = document.querySelectorAll("textarea");

  const btnEncode = btns[0];
  const btnDecode = btns[1];

  const inputTxt = areas[0];
  const outputTxt = areas[1];

  btnEncode.addEventListener("click", (e) => {
    const text = inputTxt.value
      .split("")
      .map((el) => String.fromCharCode(el.charCodeAt() + 1))
      .join("");

    outputTxt.value = text;
    
    inputTxt.value = "";

  });

  btnDecode.addEventListener("click", (e) => {
    outputTxt.value = outputTxt.value
      .split("")
      .map((el) => String.fromCharCode(el.charCodeAt() - 1))
      .join("");
    inputTxt.focus();
  });
}
