//I referenced ChatGPT (how to make circles move up and down)

let circleSize = 20;
let spacing = 30;

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  background(255);
}

function drawCircle(x, y, size) {
  noStroke();
  
  fill(random(50), random(80), random(250));
  ellipse(x+500, y+50, size, size);
}

function draw() {
  // background(255);
  
  for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 3; j++) {
      let x = i * spacing + circleSize / 2;
      let y = j * spacing + circleSize / 2;
      drawCircle(x, y+100, circleSize);
      drawCircle(x, y + sin(frameCount * 0.05 + i * 0.1) * 10, circleSize);

    }
  }

  for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 3; j++) {
      let x = i * spacing + circleSize / 2;
      let y = j * spacing + circleSize / 2;
      drawCircle(x, y+200, circleSize);
      drawCircle(x, y + sin(frameCount * 0.05 + i * 0.1) * 10, circleSize);

    }
  }

  for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 3; j++) {
      let x = i * spacing + circleSize / 2;
      let y = j * spacing + circleSize / 2;
      drawCircle(x, y+300, circleSize);
      drawCircle(x, y + sin(frameCount * 0.05 + i * 0.1) * 10, circleSize);

    }
  }
  
  for (let i = 0; i < 5; i++) {
    let x = i * spacing + circleSize / 2;
    let y = circleSize / 2;
    drawCircle(x, y + sin(frameCount * 0.05 + i * 0.1) * 10, circleSize);
  }
  
  for (let i = 0; i < 5; i++) {
    let x = i * spacing + circleSize / 2;
    let y = circleSize / 2 + spacing * 2;
    drawCircle(x, y + sin(frameCount * 0.05 + i * 0.1) * 10, circleSize);
  }

  for (let i = 0; i < 5; i++) {
    let x = i * spacing + circleSize / 2;
    let y = circleSize / 2 + spacing * 2;
    drawCircle(x, y+350 + sin(frameCount * 0.05 + i * 0.1) * 10, circleSize);
  }
  
  for (let i = 0; i < 5; i++) {
    let x = i * spacing + circleSize / 2;
    let y = circleSize / 2;
    drawCircle(x, y+500 + sin(frameCount * 0.05 + i * 0.1) * 10, circleSize);
  }

  for (let i = 0; i < 5; i++) {
    let x = i * spacing + circleSize / 2;
    let y = circleSize / 2;
    drawCircle(x, y+550 + sin(frameCount * 0.05 + i * 0.1) * 10, circleSize);
  }
  
  for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 3; j++) {
      let x = i * spacing + circleSize / 2;
      let y = j * spacing + circleSize / 2;
      drawCircle(x+200, y+50, circleSize);
      drawCircle(x, y + sin(frameCount * 0.05 + i * 0.1) * 10, circleSize);

    }
  }

  for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 3; j++) {
      let x = i * spacing + circleSize / 2;
      let y = j * spacing + circleSize / 2;
      drawCircle(x+350, y+50, circleSize);
      drawCircle(x, y + sin(frameCount * 0.05 + i * 0.1) * 10, circleSize);

    }
  }

  for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 3; j++) {
      let x = i * spacing + circleSize / 2;
      let y = j * spacing + circleSize / 2;
      drawCircle(x+200, y+200, circleSize);
      drawCircle(x, y + sin(frameCount * 0.05 + i * 0.1) * 10, circleSize);

    }
  }

  for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 3; j++) {
      let x = i * spacing + circleSize / 2;
      let y = j * spacing + circleSize / 2;
      drawCircle(x+350, y+200, circleSize);
      drawCircle(x, y + sin(frameCount * 0.05 + i * 0.1) * 10, circleSize);

    }
  }

  for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 3; j++) {
      let x = i * spacing + circleSize / 2;
      let y = j * spacing + circleSize / 2;
      drawCircle(x+200, y+400, circleSize);
      drawCircle(x, y + sin(frameCount * 0.05 + i * 0.1) * 10, circleSize);

    }
  }

  for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 3; j++) {
      let x = i * spacing + circleSize / 2;
      let y = j * spacing + circleSize / 2;
      drawCircle(x+350, y+400, circleSize);
      drawCircle(x, y + sin(frameCount * 0.05 + i * 0.1) * 10, circleSize);

    }
  }
}



function mousePressed(){
  saveCanvas(c, "03.21", "png");

}


 

 

