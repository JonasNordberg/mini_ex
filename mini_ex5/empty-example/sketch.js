// Bubbles interacting with each other

let bubbles = [];

function setup() {

  frameRate(15);
  createCanvas(windowWidth, windowHeight);
    background(0);
  for (let i = 0; i < 200; i++) { // Creating a loop to create infinite amount of bubbles
    let x = random(width);        // Random x location for spawning
    let y = random(height);       // Random y location for spawning
    let r = random(2, 15);        // Creating sort of random sizes of bubbles.
    bubbles[i] = new Bubble(x, y, r); // For every i create a new bubble, so in this instance create 200
  }
}
function draw() {
  background(0, 50);                  // I don't think i need to explain this
  for (let b of bubbles) {
    b.make();
    b.move();
    let overlapping = false;
    for (let other of bubbles) {
      if (b !== other && b.touch(other)) {
        overlapping = true;
      }
    }
    if (overlapping) {                // If the bubbles overlaps, fill the ellipses
      b.changeColor(255);
    } else {
      b.changeColor(0);
    }
  }
}

class Bubble {                        // The class with the constructor inside
  constructor(x, y, r = 50) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.brightness = 0;
  }

  touch(other) {                       // The equation for the distance
    let d = dist(this.x, this.y, other.x, other.y);
    return (d < this.r + other.r);
  }

  changeColor(bright) {
    this.brightness = bright;
  }
  move() {                            // How fast the ellipses should move
    this.x = this.x + random(-2, 2);
    this.y = this.y + random(-2, 2);
  }
  make() {                            // How does these bubbles look like
    stroke(255);
    strokeWeight(1);
    fill(this.brightness, 125);
    ellipse(this.x, this.y, this.r * 2);
  }
}
