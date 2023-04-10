let c;





function setup() {
  c =  createCanvas(1000, 1000);
  background(900,200,500);


//     fill ("black");

// rect(100, 100, 80, 250);

// rect(200, 150, 80, 250);

// rect(300, 100, 80, 250);

// rect(400, 150, 80, 250);

// ellipse(400, 200, 500);

  }

  function draw(){

    // background(900,200,500);
  stroke(mouseX,mouseY,2);
   noFill();
    rect(50, 50, mouseX, mouseY);
    strokeWeight(5);

// ellipse(mouseX,mouseY, 50)

  }

  function mousePressed(){
    saveCanvas(c, "03.21", "png");

  }