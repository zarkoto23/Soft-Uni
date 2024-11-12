function cone(radius, height) {
  let volume = (1 / 3) * Math.PI * (radius * radius) * height;
  let a = Math.sqrt(radius * radius + height * height);
  let area = Math.PI * radius * (radius + a);
  
  console.log("volume = " + volume.toFixed(4));
  console.log("area = " + area.toFixed(4));
}

cone(3.3, 7.8);
