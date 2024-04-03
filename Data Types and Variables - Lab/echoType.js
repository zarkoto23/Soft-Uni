function asd(param) {
  if (typeof param === "number") {
    console.log("number");
    console.log(param);
  } else if (typeof param === "string") {
    console.log("string");
    console.log(param);
  } else {
    console.log("object");
    console.log("Parameter is not suitable for printing");
  }
}
asd("hello");
