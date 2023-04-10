let angle=0

function setup() {
  createCanvas(3000, 3000, WEBGL);
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


angle+=0.05
//https://www.youtube.com/watch?v=mj8wXGPfhpU
}

  function mousePressed(){
    saveCanvas(c, "03.21", "png");

  }

 

 