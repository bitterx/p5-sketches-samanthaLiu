let c;

let ourFont;

let profs = ["ali","craig", "rodrick", "sadie", "nancy", "diane", "richard"];

let points;

function preload(){
  ourFont = loadFont("FugazOne-Regular.ttf");
}

function setup() {
  c =  createCanvas(1000, 1000);
  
  colorMode(HSB, 255);


textSize(100);
textFont(ourFont);


points = ourFont.textToPoints("gd2 :3", 100, 700, 200)

noStroke();
fill(200, 200, 255)
i=0;
while (i<points.length){
  console.log(points);
  ellipse(points[i].x+random (-5,5), points[i].y,10);
  i=i+1;
}


// points = myFonts.textToPoint

 

  }


function draw(){
  for(let i=0; i<points.length; i++) {
    fill(random(255),255,255)
    ellipse(points[i].x+random(-5,5), points[i].y+random(-5,5),random(10,60))


  }


  
  }
// background(0);

// let ferb = map(mouseX,0,  1000, 0, 255);

// textSize(mouseX);

// fill(ferb, 255, 255)


// text("hello world", mouseX, mouseY);

  // noFill();
  // stroke(ferb, 100,100);
//   strokeWeight(5);
// ellipse (mouseX, mouseY, 50);



// let i = 0;

// while (i<profs.length){
// text(profs[i], 100, (100*i+100));
// i = i+1;


// }





  
  function mousePressed(){
    saveCanvas(c, "03.21", "png");

  }

 

 