var backgroundImage;
var city;
var alien, alienImg;


function preload(){
backgroundImage=loadImage("images/background4.jpg")
alienImg=loadAnimation("images/alien1.png","images/alien2.png","images/alien3.png","images/alien4.png","images/alien5.png","images/alien6.png","images/alien7.png","images/alien8.png")
}

function setup() {
  createCanvas(800,400);
  
 city=createSprite(100,200,700,500)
 city.addImage(backgroundImage)
 city.scale=1
 city.velocityX=-3

 alien = createSprite(90,700, 40,70);
 alien.addAnimation("alienRunning",alienImg)
}

function draw() {
 background(255);
  
 if(city.x <80){
  city.x=700;
}


  drawSprites();
 
}

