function solve(arr) {
  let total = [];
  for (let command of arr) {
    if (command.includes("addMovie")) {
      let name = command.split("addMovie ")[1];
      let obj = {
        name: name,
      };
      total.push(obj);
    } else if (command.includes("directedBy")) {
      let [movieName, director] = command.split(" directedBy ");
      let movie = total.find((obj) => obj.name.includes(movieName));
      if (movie) {
        movie.director = director;
      }
    } else if (command.includes("onDate")) {
      let [moveName, date] = command.split(" onDate ");
      let move = total.find((obj) => obj.name.includes(moveName));
      if (move) {
        move.date = date;
      }
    }
  }
  for (movies of total) {
    if(movies.name && movies.date && movies.director)

    console.log(JSON.stringify(movies));
}
}
solve([
  'addMovie The Avengers',
  'addMovie Superman',
  'The Avengers directedBy Anthony Russo',
  'The Avengers onDate 30.07.2010',
  'Captain America onDate 30.07.2010',
  'Captain America directedBy Joe Russo'
  ]
  );
