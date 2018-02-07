function setup() {
  // put setup code here
  createCanvas(1800, 1200);
  background(103, 107, 90);
}

function draw() {
  
  if(mouseIsPressed) {
    stroke(140, 130, 200, 150);
    noFill();
  } else {
    stroke(90, 40, 150, 200);
    noFill();
  }
  rect(mouseX, mouseY, 40, 30);
  // put drawing code here
}
