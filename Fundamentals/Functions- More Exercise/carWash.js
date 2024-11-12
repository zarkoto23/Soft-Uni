function carWash(arr) {
  let percent = 0;

  for (const item of arr) {
    switch (item) {
      case "soap":
        percent += 10;
        break;
      case "water":
        percent *= 1.2;
        break;
      case "vacuum cleaner":
        percent *= 1.25;
        break;
      case "mud":
        percent *= 0.9;
    }
  }

  console.log(`The car is ${percent.toFixed(2)}% clean.`);
}

carWash(["soap", "water", "mud", "mud", "water", "mud", "vacuum cleaner"]);
