let c;

let f = 0;

function preload(){
  ourFont = loadFont("FugazOne-Regular.ttf");
}

function setup() {
  c =  createCanvas(1000, 1000);
  
  colorMode(HSB, 255);




 

  }

//noise example

function draw(){ 

  
f=f+0.1; //changes speed of movement

console.log(noise(f));

background(255);
  
 ellipse (200 ,200, random(400));

ellipse (500 ,200, noise(f)*400);
  
  }




// let i = 0;

// while (i<profs.length){
// text(profs[i], 100, (100*i+100));
// i = i+1;


// }





  
  function mousePressed(){
    saveCanvas(c, "03.21", "png");

  }

 

 