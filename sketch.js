var ball1;

function setup() {
  createCanvas(800,400);
  movingRect = createSprite(400, 200, 50, 50);
  fixedRect = createSprite(300,200,50,50);
  movingRect.shapeColor="blue";
  fixedRect.shapeColor="blue";
}

function draw() {
  background(255,255,255);  
  

  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
  if(Math.round(movingRect.x - fixedRect.x) < Math.round(movingRect.width/2+fixedRect.width/2)
  && Math.round(fixedRect.x - movingRect.x) < Math.round(movingRect.width/2+fixedRect.width/2)
  && Math.round(movingRect.y - fixedRect.y) < Math.round(movingRect.height/2+fixedRect.height/2)
  && Math.round(fixedRect.y - movingRect.y) < Math.round(movingRect.height/2+fixedRect.height/2)
 {
   fixedRect.shapeColor = "red";
 }
  

  
  drawSprites();
}