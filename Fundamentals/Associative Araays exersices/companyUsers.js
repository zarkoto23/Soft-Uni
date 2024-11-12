function solve(arr) {
  let result = {};
  for (const el of arr) {
    const [company, user] = el.split(" -> ");
    if (!result[company]) {
      result[company] = [];
    }
    if (!result[company].includes(user)) {
      result[company].push(user);
    }
  }
  let sorted = Object.keys(result).sort((a, b) => a.localeCompare(b));
  for (const el of sorted) {
    console.log(el);
    result[el].forEach(asd => {
      console.log(`-- ${asd}`)
      
    });
    }
  }


solve([
  "SoftUni -> AA12345",
  "SoftUni -> CC12344",
  "Lenovo -> XX23456",
  "SoftUni -> AA12345",
  "Movement -> DD11111",
]);
