function solve() {
  const res = {};
  const productsNames = document.querySelectorAll(".product-title");
  const productPrice = document.querySelectorAll(".product-line-price");
  const butonAdd = document.querySelectorAll(".add-product");
  const chekoutButoon = document.querySelector(".checkout");
  const result = document.querySelector("div textarea");

  butonAdd.forEach((buton, index) => {
    buton.addEventListener("click", (event) => {
      const name = productsNames[index].textContent;
      const price = Number(productPrice[index].textContent);

      if (!res[name]) {
        res[name] = { price: price, quantity: 1 };
      } else {
        res[name].quantity += 1;
      }

      result.value += `Added ${name} for ${price.toFixed(2)} to the cart.\n`;
    });
  });
  let products = "";
  let total = 0;
  chekoutButoon.addEventListener("click", () => {
    for (let item in res) {
      
      const productData = res[item];
      const productTotal = productData.price * productData.quantity;
      total += productTotal;

      products += `${item}, `;
    }

    products = products.slice(0, -2);

    result.value += `You bought ${products} for ${total.toFixed(2)}.`;
    butonAdd.forEach((buttton) =>
      buttton.setAttribute("disabled", "disabled")
    );

    chekoutButoon.setAttribute("disabled", "disabled");
  });
}
