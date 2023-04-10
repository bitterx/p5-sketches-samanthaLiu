let c;

let msg = "ITS FERB! OH MY GOD";



function setup() {
  c =  createCanvas(1000, 1000);
  background(900,200,500);





  }

  function draw(){

    textSize(20);
text(msg, width/3, height/8);

background(174, 245, 235);


fill (100,200,50);
rect(100, 100, 800, 100);


fill("white");
ellipse(700,400,400, 200);

fill("purple");
ellipse(700,400,300, 100);

fill("white");
ellipse(400,400,400, 200);

fill("purple");
ellipse(400,400,300, 100);






fill(250, 219, 162);
rect(100, 500, 700, 200);

rect(100, 900, 800, 100);

noStroke();
rect(100, 100, 200, 800);
  }

  function mousePressed(){
    saveCanvas(c, "03.21", "png");

  }

 

 