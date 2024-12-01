function attachGradientEvents() {
  const gradientEl = document.querySelector("#gradient");
  const resultEl = document.querySelector("#result");

  gradientEl.addEventListener("mousemove", (event) => {
    const ofsetX = event.offsetX;
    const width = event.currentTarget.clientWidth;
    resultEl.textContent = `${Math.floor((ofsetX / width) * 100)}%`;
  });
}
