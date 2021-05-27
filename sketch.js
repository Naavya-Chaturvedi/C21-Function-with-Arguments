var fixedRect,movingRect,box1,box2;

function setup() {
  createCanvas(400,400);
  fixedRect = createSprite(320, 200, 50, 350);
  movingRect = createSprite(100,100,100,50);
  fixedRect.shapeColor = "blue";
  movingRect.shapeColor = "blue";

  box1 = createSprite(10,100,20,20);
  box1.shapeColor = "black";
  box1.velocityX = 2;

  box2 = createSprite(10,150,20,20);
  box2.shapeColor = "yellow";
  box2.velocityX = 2;
}

function draw() {
  background(255,255,255);  

  movingRect.x = mouseX;
  movingRect.y = mouseY;

  //call the function with arguments(fixedRect,movingRect)
  if(isTouching(fixedRect,movingRect)){
    text("Touched",200,200)
  }
  
  collide(fixedRect,box1);
  bounceOff(fixedRect,box2);

  drawSprites();
}

