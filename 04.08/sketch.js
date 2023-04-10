//I referenced ChatGPT (how to make E float around screen in different shades of blue)
//you can also press on screen to produce more Es
  let es = [];

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  colorMode(HSB, 360, 100, 100); // set color mode to HSB
  for (let i = 0; i < 10; i++) {
    es.push({
      x: random(width),
      y: random(height),
      speedX: random(-5, 5),
      speedY: random(-5, 5),
      color: color(random(200, 240), random(50, 100), 100), // set hue and saturation range for shades of blue
    });
  }
}

function draw() {
  background(220);
  
  textSize(50);
  
  for (let i = 0; i < es.length; i++) {
    let e = es[i];
    e.x += e.speedX;
    e.y += e.speedY;
    
    if (e.x < 0 || e.x > width) {
      e.speedX *= -1;
    }
    
    if (e.y < 0 || e.y > height) {
      e.speedY *= -1;
    }
    
    fill(e.color);
    text('E', e.x, e.y);
  }
}

function mouseClicked() {
  es.push({
    x: mouseX,
    y: mouseY,
    speedX: random(-5, 5),
    speedY: random(-5, 5),
    color: color(random(200, 240), random(50, 100), 100), // set hue and saturation range for shades of blue
  });
}
