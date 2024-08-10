function setup() {
  createCanvas(700, 480);
  
  //R, G & B values.
  background (255 , 204, 0);
  
 // take a big brush 
  strokeWeight(10);
  
 // dip it in color purple
  stroke("rgb(116,23,104)");
  //frameRate(10);
  
}

function draw() {
  //declare variables
  let posY = mouseY;
  let posX = mouseX;
  //place a dot on a screen
  point(posX , posY);
  
 // call jump function
  jump(); 
  
}
function jump() { 
 console.log ('jump!!!!')
}