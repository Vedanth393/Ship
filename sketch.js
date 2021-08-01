var seaImg
var ship
var sea
var ship_moving

function preload(){
  ship_moving = loadAnimation("ship-1.png")

  seaImg = loadImage("sea.png")
}

function setup(){
  
  createCanvas(400,400);
 

  sea=createSprite(200,200)
sea.addImage(seaImg)
sea.velocityX= -4

ship = createSprite(50,50,10,20)
ship.addAnimation("moving",ship_moving);
}

function draw() {
  background("blue");
 
 if(sea.x<0){
  sea.x = sea.width/2;
}
drawSprites()
}