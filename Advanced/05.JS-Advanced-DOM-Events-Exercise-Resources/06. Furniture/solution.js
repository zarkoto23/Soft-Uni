function solve() {
  const generateButton = document.querySelectorAll("button")[0];
  const buyButton = document.querySelectorAll("button")[1];


  generateButton.addEventListener("click", (e) => {
  const inputTextArea = document.querySelectorAll("textarea")[0];

    const productListEl = document.querySelector("table.table tbody");
    const productData = JSON.parse(inputTextArea.value);

    productData.forEach((item) => {
      const product = document.createElement("tr");

      const imageCell = document.createElement("td");
      const image = document.createElement("img");
      image.setAttribute("src", item.img);
      imageCell.appendChild(image);

      const name = document.createElement("td");
      name.textContent = item.name;

      const price = document.createElement("td");
      price.textContent = (item.price);
      const decFactor = document.createElement("td");
      decFactor.textContent = (item.decFactor);
      const mark = document.createElement("td");
      const markChekbox = document.createElement("input");
      markChekbox.setAttribute("type", "checkbox");
      mark.appendChild(markChekbox);

      product.append(imageCell, name, price, decFactor, mark);
      productListEl.appendChild(product);
    });
  });

  buyButton.addEventListener("click", (e) => {
  const outputTextArea = document.querySelectorAll("textarea")[1];
  outputTextArea.value=''

    const data = [
      ...document.querySelectorAll(".table tbody tr:has(input:checked"),
    ].map((i) => ({
      name: i.childNodes[1].textContent,
      price: Number(i.childNodes[2].textContent),
      decFactor: Number(i.childNodes[3].textContent),
    }));

    if (data.length < 1) return;
    outputTextArea.disabled=false

    let output = `Bought furniture: ${data.map((e) => e.name).join(", ")}\n`;
    output += `Total price: ${Number(
      data.reduce((acc, el) => {
        return acc + el.price;
      }, 0)
    ).toFixed(2)}\n`;

    output += `Average decoration factor: ${
      (data.reduce((acc, el) => acc + el.decFactor, 0) / data.length)
    }`;
    

    outputTextArea.value = output;
  });
}
