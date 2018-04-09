var api = "https://api.giphy.com/v1/gifs/trending?";   // Refererer til giphy's API side
var apiKey = "&api_key=dc6zaTOxFJmzC";                // koden
var txt1;
var txt2;
var txt;
var gifsize = "&original";

function preload() {
  txt1 = loadImage('Assets/Memo1.png');
  txt2 = loadImage('Assets/Memo2.png');
}

function setup() {
  createCanvas(windowWidth, 110);                     // Canvas
  var url = api + apiKey + gifsize;                             // URL skal bestå af dette
  loadJSON(url, gotData);                             // Henter JSON
  background(255);
  strokeWeight(5);
  fill(214,182,226);
  rect(3, 3, windowWidth-26, 104, 20);
  txt = random(4);
  print(txt);
}

function gotData(giphy) {
  for (var i = 0; i < giphy.data.length; i++) {
    createImg(giphy.data[i].images.original.url);
  }

}
function draw() {
  if (txt>0 && txt<1) {
    imageMode(CENTER)
    image(txt1,windowWidth/2-20,55,1000,100);
  } else if (txt>1 && txt<2) {
    imageMode(CENTER)
    image(txt2,windowWidth/2-20,55,1000,100);
  } else if (txt>2 && txt<3) {
    textSize(52);
    textAlign(CENTER);
    text('Did you get the Memo?',windowWidth/2-20,75);
    fill(0);
  } else if (txt>3 && txt<4) {
    textSize(52);
    textAlign(CENTER);
    text('DiD yOu GeT tHe MeMo?',windowWidth/2-20,75);
    fill(0);
  }
}
