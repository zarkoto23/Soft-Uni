function calculateDistanceSquared(x1, y1, x2, y2) {
  let deltaX = x2 - x1;
  let deltaY = y2 - y1;
  let distanceSquared = deltaX * deltaX + deltaY * deltaY;
  console.log(Math.sqrt(distanceSquared));
}

calculateDistanceSquared(2, 4, 5, 0);
