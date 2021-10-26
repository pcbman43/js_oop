class Shape {
  constructor(name, sides, sideLength) {
    this.name = name;
    this.sides = sides;
    this.sideLength = sideLength;
  }
  calcPerimeter() {
    console.log(this.sides * this.sideLength);
  }
}


// Write your code below here

let square = new Shape("square", 3, 5);
square.calcPerimeter();

let triangle = new Shape("triangle", 5, 4);
triangle.calcPerimeter();