class Circle {
  _radius;

  get radius() {
    return this._radius;
  }
  set radius(value) {
    if (value <= 0) {
      throw new RangeError("radius cant be negative");
    }
    if (typeof value != "number") {
      throw new TypeError("diameter must be number");
    }
    this._radius = value;
  }

  get diameter() {
    return this.radius * 2;
  }

  set diameter(value) {
    this.radius = value / 2;
  }
  get area() {
    return Math.PI * this.radius ** 2;
  }

  constructor(radius) {
    this.radius = radius;
  }
}

let c = new Circle(2);
console.log(`Radius: ${c.radius}`);
console.log(`Diameter: ${c.diameter}`);
console.log(`Area: ${c.area}`);
c.diameter = 1.6;
console.log(`Radius: ${c.radius}`);
console.log(`Diameter: ${c.diameter}`);
console.log(`Area: ${c.area}`);
