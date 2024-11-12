function school(arr) {
  let map = new Map();

  for (let nameGrade of arr) {
    let [name, ...grades] = nameGrade.split(" ");
    grades = grades.map(Number);
    if (map.has(name)) {
      let curGrades = map.get(name);
      map.set(name, curGrades.concat(grades));
    } else {
      map.set(name, grades);
    }
  }
  let sortedEntries = [...map.entries()].sort(([keyA], [keyB]) =>
    keyA.localeCompare(keyB)
  );

  for (let [game, grade] of sortedEntries) {
    let sum = grade.reduce((a, b) => a + b, 0);
    let avrg = (sum / grade.length).toFixed(2);
    console.log(`${game}: ${avrg}`);
  }
}
school(["Steven 3 5 6 4", "George 4 6", "Tammy 2 5 3", "Steven 6 3"]);
