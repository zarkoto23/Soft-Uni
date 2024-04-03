function asd(one, two, three) {
  let a = one + two + three;

  a % 1 === 0 ? (a += ` - Integer`) : (a += ` - Float`);
  console.log(a);
}
asd(9, 100, 1.1);
