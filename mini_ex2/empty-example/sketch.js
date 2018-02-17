// DANCEFLOOR FT. JOHN TRAVOLTA - SATURDAY NIGHT FEVER

var song;
var amp;
function preload (){
  soundFormats('mp3');
  song = loadSound('disco.mp3');
}
function setup() {
  // First create a big canvas, I chose 1000 X 800.
  createCanvas(1000, 800);
  song.play();
  amp = new p5.Amplitude();
}

function draw() {
background(0);
strokeWeight(1);
stroke(255);
fill(random(0), random(0 ,255), random(255))
text('Click for Dancefloor', 870, 780);



// create unlimited shapes with the following line of code
for (var x = 0; x <= mouseX; x = x + 50) {
  for (var y = 0; y <= mouseY; y = y + 50) {

// Change between two different shapes and visual experience
// Dancing Dancefloor
    if(mouseIsPressed){
  fill(random(0), random(0 ,255), random(255));
  var level = amp.getLevel();
  var size = map(level, 0, 0.5, 0, 100);
  rect(x, y, size, size);
  frameRate(24);
} else {

  // Dancing circel
  fill(random(255), random(255), random(255));
  var level = amp.getLevel();
  var size = map(level, 0, 0.05, 0, 100);
  rect(width/2, height/2, size, size);
  rectMode(CENTER);


}
}
  }
}
// A lot of end brackets ^^
