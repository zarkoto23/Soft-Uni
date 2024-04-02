function asd(year, moth, day) {
  let dayNew = 0;
  let mothNew = 0;
  if (day + 1 > 30) {
    dayNew = 1;
    mothNew = moth + 1;
  } else {
    dayNew = day + 1;
    mothNew = moth;
  }
  console.log(`${year}-${mothNew}-${dayNew}`);
}

asd(1,1,1);
