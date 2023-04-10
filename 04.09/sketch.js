//I referenced ChatGPT (how to make Es rotate)
//it has a cool texture if background is removed
let es = [];

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  colorMode(HSB, 360, 100, 100);
  for (let i = 0; i < 10; i++) {
    es.push({
      x: random(width),
      y: random(height),
      speed: random(-5, 5), // set random speed for rotation
      color: color(random(200, 240), random(50, 100), 100),
    });
  }
}

function draw() {
  // background(220);
  
  textSize(50);
  
  for (let i = 0; i < es.length; i++) {
    let e = es[i];
    e.x += e.speed;
    
    if (e.x < -50) {
      e.x = width + 50; // wrap around to the other side of the canvas
    } else if (e.x > width + 50) {
      e.x = -50;
    }
    
    push();
    translate(e.x, e.y);
    rotate(random(TWO_PI)); // set random angle of rotation
    fill(e.color);
    text('E', 0, 0); // draw letter E at the rotated angle
    pop();
  }
}

function mouseClicked() {
  es.push({
    x: mouseX,
    y: mouseY,
    speed: random(-5, 5),
    color: color(random(200, 240), random(50, 100), 100),
  });
}
