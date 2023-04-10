let c;

let msg = "Connect the dots to make an E by pressing once";



function setup() {
  c =  createCanvas(1000, 1000);
  background(154, 132, 227);






  }

  function draw(){
textSize(20);
text(msg, width/3, height/8);

 
// background(200,800,400);

stroke("white");
strokeWeight(20);
point(100, 200);
point(100, 500);
point(100, 800);


point(700, 200);
point(500, 500);
point(700, 800);



// strokeWeight(5);
// line(100, 200, 700, 200);
// line(100, 500, 500, 500);
// line(100, 800, 700, 800);
stroke("white");
stokeWeight(10);
line(100, 200, 100, 800);


  }

  function mousePressed(){
    noStroke();
    ellipse(mouseX,mouseY, 50)
  }
 