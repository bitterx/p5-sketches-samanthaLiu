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

    

background(250,800,mouseY);
noStroke();

    fill (100,200,50);


rect(100, 100, 800, mouseY);

rect(100, 500, 700, mouseY);

rect(100, 900, 800, mouseY);


rect(100, 100, 200, 800);
  }

  function mousePressed(){
    saveCanvas(c, "03.21", "png");

  }

 

 