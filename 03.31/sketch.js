//text
let msg = "E"; //objects can hold more complex stuff
let x = 10;
let font; 

function setup() {
  createCanvas(2000, 2000);

}
let xoff = 0.0;

function draw() {

 

line
  xoff = xoff + 0.01;
  let n = noise(xoff) * width;
  line(n, 0, n, height);
 fill("white");
  textSize(1000);
  textAlign(CENTER);
  text(msg, width / 2, height / 2);
}
  
  function mousePressed(){
    saveCanvas(c, "03.21", "png");

  }

 

 