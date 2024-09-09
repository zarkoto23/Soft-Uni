function sort(arr) {
  let newArr = arr.sort((a, b) => a.length - b.length || a.localeCompare(b));

  console.log(newArr);
}

sort(["Isacc", "Theodor", "Jack", "Harrison", "George"]);
