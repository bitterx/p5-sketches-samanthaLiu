let y= 0;
let move = 20;

let diameter = 60;
let x= 0;

function setup() {
  createCanvas(1000, 1000, WEBGL);
    background("black");
 
  
}
function draw() {
  // background("black");


noStroke();
fill("yellow")
circle(width/12, y, 90);
y = y + move;

if(y>=height||y<0){
  move= -move;
}

fill("yellow");
circle(x, height/3, diameter)
x = x + 10;
if(x>=width||x<0){
  move= -move;
}

fill("yellow");
circle(x, height/5, diameter)
x = x + 10;

fill("yellow");
circle(x, height/30, diameter)
x = x + 10;

}
  
  function mousePressed(){
    saveCanvas(c, "03.21", "png");

  }

 

 