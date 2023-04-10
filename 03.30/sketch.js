let c;


var bgColor;

let msg = "Tap on screen to randomize background colour!"; //objects can hold more complex stuff
let x = 10;
let font; //step one font

function setup() {
  c =  createCanvas(1000, 1000);
 
  bgColor = color( random(255), random(255), random(255) );







  }

  function draw(){
    background(bgColor);

    textSize(35);
  textAlign(CENTER);
  text(msg, width / 2, height / 13);

    noStroke();
    fill ("black");
    
    rect(100, 200, 800, 50);
    
    rect(100, 500, 700, 50);
    
    rect(100, 900, 800, 50);
    
    
    rect(100, 100, 100, 800);

    noStroke();
    fill ("white");

rect(100, 100, 800, 50);

rect(100, 400, 700, 50);

rect(100, 800, 800, 50);


rect(100, 100, 100, 700);




  }


  function mousePressed(){
    bgColor = color( random(255), random(255), random(255) );
  }


  

  

 