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

    

background(245, 206, 66);

stroke("black");
strokeWeight(20);


strokeWeight(5);
line(100, 200, 700, 200);
line(100, 250, 700, 250);
line(100, 300, 700, 300);

line(100, 500, 500, 500);
line(100, 550, 500, 550);
line(100, 600, 500, 600);

line(100, 800, 700, 800);
line(100, 850, 700, 850);
line(100, 900, 700, 900);

strokeWeight(mouseX);
line(100, 200, 100, mouseY);



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

 

 