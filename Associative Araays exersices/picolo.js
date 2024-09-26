function solve(arr) {
  const cars = new Set();

  for (const carInfo of arr) {
    const [command, carNum] = carInfo.split(", ");

    if (command === "IN") {
      cars.add(carNum);
    } else {
      cars.delete(carNum);
    }
  }
  const sorted = Array.from(cars);
  sorted.sort((a, b) => a.localeCompare(b));
  if (sorted.length > 0) {
    console.log(sorted.join("\n"));
  } else {
    console.log("Parking Lot is Empty");
  }
}

solve([
  "IN, CA2844AA",
  "IN, CA1234TA",
  "OUT, CA2844AA",
  "IN, CA9999TT",
  "IN, CA2866HI",
  "OUT, CA1234TA",
  "IN, CA2844AA",
  "OUT, CA2866HI",
  "IN, CA9876HH",
  "IN, CA2822UU",
]);
