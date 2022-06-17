const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var bg,bgimg;
var snowman,snowmanimg;
var snow=[];
var engine,world;
var eg;


function preload(){
 bgimg=loadImage("snow1.jpg");
 snowmanimg=loadImage("snowman.png");
}




function setup() {
  
  engine=Engine.create();
  world=engine.world;
  
  
  createCanvas(windowWidth,windowHeight);
  snowman=createSprite(200, windowHeight-200, 50, 50);
  snowman.addImage(snowmanimg);
  snowman.scale=0.7;
  snowman.velocityX=3;

eg=createSprite(windowWidth/2,windowHeight-10,windowWidth,10);
eg.visible=false;


  
}

function draw() {
  background(bgimg);  
  Engine.update( engine);
  
  if(frameCount%2===0){
    snow.push(new Snow(random(20,800),0));
  }
if(snowman.x>windowWidth-100){
snowman.x=0;
}
  for(var i=0;i<snow.length;i++){
    snow[i].display();
  }

  if(keyDown("space")){
    snowman.velocityY=-10;

    
  }
  snowman.velocityY=snowman.velocityY+0.9;
  snowman.collide(eg);
  
  drawSprites();

}
