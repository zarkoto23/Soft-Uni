function meet(arr) {
  let list = {};

  for (let info of arr) {
    let [day, person] = info.split(" ");
    if (list.hasOwnProperty(day)) {
      console.log(`Conflict on ${day}!`);
    } else {
      list[day] = person;
      console.log(`Scheduled for ${day}`);
    }
  }

  for (let item in list) {
    console.log(`${item} -> ${list[item]}`);
  }
}

meet(["Monday Peter", "Wednesday Bill", "Monday Tim", "Friday Tim"]);
