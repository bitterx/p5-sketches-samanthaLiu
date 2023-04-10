//I referenced ChatGPT (how to make rectangles rotate)

let angle = 0; // declare global variable for angle

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
}

function draw() {
  // background("white"); // set background color
  noStroke();

  //first E
  fill(52, 107, 235); 
  rect(300 + 100 * cos(angle), 300 + 100 * sin(angle), 400, 100); // draw rectangle at position (200 + 100*cos(angle), 200 + 100*sin(angle))
  angle += 0.05; // increment angle variable to make rectangle move in a circle

  fill(77, 164, 240);
  rect(300 + 100 * cos(angle), 300 + 100 * sin(angle), 100, 500); // draw rectangle at position (200 + 100*cos(angle), 200 + 100*sin(angle))
  angle += 0.0001; // increment angle variable to make rectangle move in a circle

  fill(77, 235, 240); 
  rect(300 + 100 * cos(angle), 700 + 100 * sin(angle), 400, 100); // draw rectangle at position (200 + 100*cos(angle), 200 + 100*sin(angle))
  angle += 0.05; // increment angle variable to make rectangle move in a circle

  fill(61, 207, 212); 
  rect(300 + 100 * cos(angle), 500 + 100 * sin(angle), 400, 100); // draw rectangle at position (200 + 100*cos(angle), 200 + 100*sin(angle))
  angle += 0.05; // increment angle variable to make rectangle move in a circle

//second E
fill(52, 107, 235); 
  rect(1000 + 100 * sin(angle), 300 + 100 * cos(angle), 400, 100); // draw rectangle at position (200 + 100*cos(angle), 200 + 100*sin(angle))
  angle += 0.01; // increment angle variable to make rectangle move in a circle

  fill(77, 164, 240); 
  rect(1000 + 100 * sin(angle), 300 + 100 * cos(angle), 100, 500); // draw rectangle at position (200 + 100*cos(angle), 200 + 100*sin(angle))
  angle += 0.01; // increment angle variable to make rectangle move in a circle

  
  fill(52, 107, 235); 
  rect(1000 + 100 * sin(angle), 800 + 100 * cos(angle), 400, 100); // draw rectangle at position (200 + 100*cos(angle), 200 + 100*sin(angle))
  angle += 0.01; // increment angle variable to make rectangle move in a circle

  fill(52, 107, 235); 
  rect(1000 + 100 * sin(angle), 550 + 100 * cos(angle), 400, 100); // draw rectangle at position (200 + 100*cos(angle), 200 + 100*sin(angle))
  angle += 0.01; 

 
}


function mousePressed(){
  saveCanvas(c, "03.21", "png");

}


 

 

