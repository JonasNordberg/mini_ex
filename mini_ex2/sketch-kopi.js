var point = {
  x: 100,
  y: 50
};
var col = {
  r: 255,
  g: 0,
  b: 0
};
function setup(){
  createCanvas(600, 400);
  background(0);
}

function draw() {
  fill(col.r, col.g, col.b);
  ellipse(point.x, point.y, 24, 24);
}
// Variables
// 1. Declare! --> var + name(can be called anything)
// example:        var circleX;
// var declarations always have to be at first.
// 2. Initiate!
// Give value til Variables
// example:        circleX = 50;
// 3. Use!
