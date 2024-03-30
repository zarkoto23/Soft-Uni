function asd(count, type, day) {
  let price = 0;
  switch (day) {
    case "Friday":
      if (type === "Students") {
        price = 8.45;
        if (count >= 30) {
          price *= 0.85;
        }
      } else if (type === "Business") {
        price = 10.9;
        if (count >= 100) {
          count -= 10;
        }
      } else if (type === "Regular") {
        price = 15;
        if (count >= 10 && count <= 20) {
          price *= 0.95;
        }
      }

      break;

    case "Saturday":
      if (type === "Students") {
        price = 9.8;
        if (count >= 30) {
          price *= 0.85;
        }
      } else if (type === "Business") {
        price = 15.6;
        if (count >= 100) {
          count -= 10;
        }
      } else if (type === "Regular") {
        price = 20;
        if (count >= 10 && count <= 20) {
          price *= 0.95;
        }
      }

      break;
    case "Sunday":
      if (type === "Students") {
        price = 10.46;
        if (count >= 30) {
          price *= 0.85;
        }
      } else if (type === "Business") {
        price = 16;
        if (count >= 100) {
          count -= 10;
        }
      } else if (type === "Regular") {
        price = 22.5;
        if (count >= 10 && count <= 20) {
          price *= 0.95;
        }
      }
      break;
  }
  console.log(`Total price: ${(price * count).toFixed(2)}`);
}
asd(40, "Regular", "Saturday");
