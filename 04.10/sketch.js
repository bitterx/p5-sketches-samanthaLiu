//I referenced ChatGPT (how to make a large E rotate around smaller ones)
//I edited the space between them, change colour according to mouseX & Y
let angle = 0;

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
}



function drawE(x, y, size) {
  strokeWeight(5);
  stroke(mouseX, mouseY, 245);
  line(x, y, x + size, y); 
  line(x, y, x, y + size); 
  line(x, y + size / 2, x + size, y + size / 2); 
  line(x, y + size, x + size, y + size); 
}

function drawLittleE(x, y, size, angle, radius) {
  let r = random(50, 150);
  let g = random(100, 200);
  let b = random(200, 255);
  
  stroke(r, g, b);
  push();
  translate(x, y);
  rotate(angle);
  drawE(-size / 2, -size / 2, size);
  pop();
}

function draw() {
  background(0);
  
  push();
  translate(width / 4, height / 2);
  rotate(angle);
  drawE(-50, -50, 100);
  
  let radius = 150;
  for (let i = 0; i < 8; i++) {
    let littleE_angle = i * TWO_PI / 8;
    let littleE_x = radius * cos(littleE_angle);
    let littleE_y = radius * sin(littleE_angle);
    drawLittleE(littleE_x, littleE_y, 20, angle * (i + 1), radius);
  }
  
  pop();
  
  push();
  translate(width * 3/4, height / 2);
  rotate(-angle); // rotate in the opposite direction
  drawE(-50, -50, 100);
  
  for (let i = 0; i < 8; i++) {
    let littleE_angle = i * TWO_PI / 8;
    let littleE_x = radius * cos(littleE_angle);
    let littleE_y = radius * sin(littleE_angle);
    drawLittleE(littleE_x, littleE_y, 20, angle * (i + 1), radius);
  }
  
  pop();
  
  angle += 0.05;
}
