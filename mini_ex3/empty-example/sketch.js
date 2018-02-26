function planet(speed, distance, size, color) { // the template planet.
push();
  var rot = 360/speed*(frameCount%speed);       // NB: the speed parameter is inverted!
  rotate(radians(rot));                         // (higher value -> slower speed)
  fill(color);
  ellipse(0, distance, size, size);
  pop();
}
function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(200);
  background(0);
}
function draw() {
  background(0, 50);
  noStroke();
  var words = ['Loading...', 'Please wait']; // Creating Arrays - Loading and please wait
  textAlign(CENTER, CENTER);
  textFont('Helvetica');
  textSize(18);
  fill('white');
  text(words[0], width/2, height/20);     // Executing the arrays
  text(words[1], width/2, height/20*19);
  push();
  translate(width/2, height/2);
                                    // All planets' speed is calculated from the earth's rotation speed which is 1 year. In this program I have given 1 year the equivalent of 1000.
  planet(0, 0, random(100, 103), '#ff9030');     // sun
  planet(240, 70, 4, '#726291');   // mercury
  planet(620, 100, 7, '#e8ce96');   // venus
  planet(1000, 150, 7, '#7f7fff');  // earth
  planet(1880, 165, 5, '#bf5e0f');   // mars
  planet(11860, 180, 30, '#d8c5b6');  // jupiter
  planet(29460, 210, 22, 'ffffff');   // saturn ring
  planet(29460, 210, 19, '#ccad70');  // saturn
  planet(84010, 234, 9, '#3da4db');  // uranus
  planet(164800, 275, 6, '#0000b2');  // neptune
  planet(248000, 300, 2, '#bcbab1');  // pluto - I know it is not a real planet though...
  pop();
}
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
