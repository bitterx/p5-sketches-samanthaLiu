function setup() {
  createCanvas(100, 100, WEBGL);
  normalMaterial();
  describe(
    'Camera orbits around a box when mouse is hold-clicked & then moved.'
  );
}
function draw() {
  background(200);
  orbitControl();
  rotateY(0.5);
  box(30, 50);
}
  
  function mousePressed(){
    saveCanvas(c, "03.21", "png");

  }

 

 