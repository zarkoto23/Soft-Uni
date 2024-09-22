function storage(arr) {
  let map= new Map();

  for (let items of arr) {
    let [product, quantity] = items.split(" ");
    quantity = Number(quantity);
    if (map.has(product)) {
      map.set(product, map.get(product)+quantity)
    } else {
      map.set(product, quantity)
    }
  }

  for (let [key, value] of map) {
    console.log(`${key} -> ${value}`);
  }
}

storage(["tomatoes 10", "coffee 5", "olives 100", "coffee 40"]);
