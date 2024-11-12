function solve(arr1, arr2) {
  let total = [];
  while (arr1.length > 0) {
    let obj = {};

    obj.product = arr1.shift();
    obj.quantity = Number(arr1.shift());

    total.push(obj);
  }

  for (let i = 0; i < arr2.length; i += 2) {
    let product = arr2[i];
    let quantity = Number(arr2[i + 1]);

    let isHave = total.find((obj) => obj.product === product);

    if (isHave) {
      isHave.quantity += quantity;
    } else {
      let newobj = {
        product,
        quantity,
      };
      total.push(newobj);
    }
  }

  for (const item of total) console.log(`${item.product} -> ${item.quantity}`);
}
solve(
  ["Chips", "5", "CocaCola", "9", "Bananas", "14", "Pasta", "4", "Beer", "2"],
  ["Flour", "44", "Oil", "12", "Pasta", "7", "Tomatoes", "70", "Bananas", "30"]
);
