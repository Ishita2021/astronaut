var bg,sleep,brush,gym,eat,bath,move,astronaut;
function preload(){
  bg=loadImage("Images/iss.png");
  sleep=loadAnimation("Images/sleep.png");
  brush=loadAnimation("Images/brush.png");
  gym=loadAnimation("Images/gym1.png","Images/gym1.png","Images/gym2.png","Images/gym2.png");
  eat=loadAnimation("Images/eat1.png","Images/eat1.png","Images/eat2.png","Images/eat2.png");
  bath=loadAnimation("Images/bath1.png","Images/bath1.png","Images/bath2.png","Images/bath2.png");
  move=loadAnimation("Images/move1.png","Images/move1.png","Images/move2.png","Images/move2.png");
  
}
function setup() {
  createCanvas(600,500);
 astronaut =  createSprite(300, 230, 50, 50);
 astronaut.addAnimation("sleeping",sleep);
 astronaut.scale=0.1;

 
}

function draw() {
  background(bg); 
  drawSprites();
  textSize(20);
  fill ("white");
  text("instruction",20,35);
  textSize(15);
  text("up arrow=brushing",20,55);
   text("down arrow=gymming",20,70);
   text("left arrow=eating",20,85);
   text("right arrow=bathing",20,100);
   text(" m key =moving",20,115);

  edges=createEdgeSprites();
  astronaut.bounceOff(edges);
  if(keyDown(UP_ARROW)){
    astronaut.addAnimation("brushing",brush);
    astroanaut.changeAnimation("brushing");
    astronaut.y=350;
    astronaut.velocityX=0;
    astronaut.velocityY=0;
  }
  
  if(keyDown(DOWN_ARROW)){
    astronaut.addAnimation("gymming",gym);
    astroanaut.changeAnimation("gymming");
    astronaut.y=350;
    astronaut.velocityX=0;
    astronaut.velocityY=0;
}

if(keyDown(LEFT_ARROW)){
  astronaut.addAnimation("eating",eat);
    astroanaut.changeAnimation("eating");
    astronaut.x=150;
    astronaut.y=350;
    astronaut.velocityX=0.5;
    astronaut.velocityY=0.5;
}

if(keyDown(RIGHT_ARROW)){
  astronaut.addAnimation("bathing",bath);
  astroanaut.changeAnimation("bathing");
  astronaut.x=300;
 astronaut.velocityX=0;
  astronaut.velocityY=0;
}
if(keyDown("m")){
  astronaut.addAnimation("moving",move);
  astroanaut.changeAnimation("moving");
  
 astronaut.velocityX=1;
  astronaut.velocityY=1;
}


}