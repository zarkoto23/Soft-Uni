function asd(arr) {
  let comands = arr.slice(2);
  let field = [];
  for (let i = 0; i < arr[0]; i++) {
    field.push(0);
  }

  let fill = arr[1];

  for (let i = 0; i < field.length; i++) {
    let position = Number(fill[i]);
    if (position > field.length) {
      continue;
    }
    field[position] = 1;
  }

  for (let i = 0; i < comands.length; i++) {
    let currentCommand = comands[i].split(" ");

    let fieldPosition = Number(currentCommand[0]);
    let direction = currentCommand[1];
    let movePlaces = Number(currentCommand[2]);

    if (
      field[fieldPosition] === 0 ||
      fieldPosition > field.length ||
      fieldPosition < 0
    ) {
      continue;
    }
    field[fieldPosition] = 0;

    if (movePlaces < 0) {
      direction = direction === "right" ? "left" : "right";
      movePlaces = Math.abs(movePlaces);
    }

    let next = 0;

    if (direction === "right") {
      next = fieldPosition + movePlaces;
    } else if (direction === "left") {
      next = fieldPosition - movePlaces;
    }

    while (field[next] === 1) {
      if (direction === "right") {
        next += fieldPosition + movePlaces;
      } else if (direction === "left") {
        next += fieldPosition + movePlaces;
      }
    }
    if (next > field.length - 1 || next < 0) {
      continue;
    }
    field[next] = 1;
  }

  console.log(field.join(" "));
}

asd([5, "3", "3 left 2", "1 left -2"]);
