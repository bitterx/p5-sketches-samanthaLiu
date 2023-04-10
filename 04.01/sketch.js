let angle=0

function setup() {
  createCanvas(window.innerWidth, window.innerHeight, WEBGL);
  normalMaterial();
 
  
}
function draw() {
  background(500,400,100);
  rotateX(angle)
  rotateY(angle)
  rotateZ(angle)
  
// box(100,400,100);
beginShape();

rect(200, 100, 800, 100);

rect(100, 500, 700, 100);

rect(100, 900, 800, 100);


rect(100, 100, 200, 800);
scale(0.5);
endShape();


//second E
rotateZ(angle)
beginShape();
rect(100, 50, 400, 50);

rect(50, 250, 350, 50 );

rect(50, 450, 400, 50);

rect(50, 50, 100, 400);

endShape();

rotateY(angle)
beginShape();
rect(100, 50, 400, 50);

rect(50, 250, 350, 50 );

rect(50, 450, 400, 50);

rect(50, 50, 100, 400);
endShape();

rotateZ(angle)
beginShape();
rect(100, 50, 400, 50);

rect(50, 250, 350, 50 );

rect(50, 450, 400, 50);

rect(50, 50, 100, 400);
endShape();

angle+=0.05
//https://www.youtube.com/watch?v=mj8wXGPfhpU
}

  function mousePressed(){
    saveCanvas(c, "03.21", "png");

  }

 

 