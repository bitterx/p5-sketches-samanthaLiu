//I referenced ChatGPT and added a black background(how to make E fall down screen in randomized colour)

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  colorMode(HSB, 360, 100, 100);
}

let yPos = 0;
let xPos;
let textSizeVal; // declare global variables for x position, text size, and color components


function draw() {
  background(0);
  fill(random(255)); // generate random color
  textSize(textSizeVal); // set text size to random value
  text("E", xPos, yPos);
  yPos += 5;
  if (yPos > height) {
    yPos = 0;
    xPos = random(width);
    textSizeVal = random(16, 64); // generate random text size between 16 and 64
  }
}


function mousePressed(){
  saveCanvas(c, "03.21", "png");

}


 

 

