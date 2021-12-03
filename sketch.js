
var trex ,trex_running ;
var ground,groundImage ;
function preload(){
trex_running=loadAnimation("trex1.png","trex3.png","trex4.png")  
ground
}

function setup(){
  createCanvas(600,200)
 
  //create a trex sprite
 trex = createSprite(100,150,10,30);
 trex.addAnimation("running",trex_running);
 trex.scale=0.5
 ground = createSprite(300,170,600,10)
}

function draw(){
  background("blue")
  if(keyDown("space"))
  {
trex.velocityY=-6

  }
  trex.velocityY=trex.velocityY+0.8
  trex.collide(ground)

drawSprites();
}
