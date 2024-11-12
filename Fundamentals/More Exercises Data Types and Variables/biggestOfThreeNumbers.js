function biggest(one, two, three) {
  let arr = [];
  arr.push(one, two, three);

  arr.sort(function (a, b) {
    return a - b;
  });

  console.log(arr[arr.length - 1]);
}
biggest(130, 5, 99);
