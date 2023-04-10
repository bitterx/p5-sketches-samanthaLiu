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

    

background(200,800,400);

stroke("red");
strokeWeight(mouseX);
point(mouseX, mouseY);
point(100, 500);
point(100, 800);


point(700, 200);
point(500, 500);
point(700, 800);

strokeWeight(5);
line(100, 200, 700, 200);
line(100, 500, 500, 500);
line(100, 800, 700, 800);
line(100, 200, 100, 800);

// noStroke();

//     fill (100,200,50);


// rect(100, 100, 800, mouseY);

// rect(100, 500, 700, mouseY);

// rect(100, 900, 800, mouseY);


// rect(100, 100, 200, 800);
  }

  function mousePressed(){
    saveCanvas(c, "03.21", "png");

  }

 

 