// Checkboxes
// Dette program tracker computerens video og skaber et pixeleret
// video. Disse pixels er så blevet lavet om til små flueben.
var video;

var vScale = 16;
var slider;

var cols = 40;
var rows = 30;

var boxes = [];

function setup() {
  noCanvas();
  pixelDensity(1);
  video = createCapture(VIDEO); // Define video
  video.size(cols, rows); // p5.DOM is used
  slider = createSlider(0, 255, 77);

  for (var y = 0; y < rows; y++) {
    for (var x = 0; x < cols; x++) {
      var box = createCheckbox();
      box.style('display', 'inline'); // styling
      box.parent('mirror'); // Using parent
      boxes.push(box);
    }
    var linebreak = createSpan('<br/>');
    linebreak.parent('mirror');
  }

}

function draw() {
  video.loadPixels();
  for (var y = 0; y < video.height; y++) {
    for (var x = 0; x < video.width; x++) {
      var index = (video.width - x + 1 + (y * video.width))*4;
      var r = video.pixels[index+0];
      var g = video.pixels[index+1];
      var b = video.pixels[index+2];

      var bright = (r+g+b)/3;

      var threshold = slider.value();

      var checkIndex = x + y * cols;

// Checking boxes
      if (bright > threshold) {
        boxes[checkIndex].checked(false);
      } else {
        boxes[checkIndex].checked(true);
      }
    }
  }

}
