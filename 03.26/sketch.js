let c;





function setup() {
  c =  createCanvas(1000, 1000);
  background(900,200,500);


//     fill ("black");

// rect(100, 100, 800, 100);

// rect(100, 500, 700, 100);

// rect(100, 900, 800, 100);


// rect(100, 100, 200, 800);



  }

  function draw(){

    noStroke();
    ellipse(mouseX,mouseY, 50)
// background(200,800,400);

stroke("red");
strokeWeight(9);
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
line(100, 200, 100, 800);


  }

  function mousePressed(){
    saveCanvas(c, "03.21", "png");

  }

 

 