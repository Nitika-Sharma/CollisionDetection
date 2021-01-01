var movingRect,fixedRect;



function setup() {
  createCanvas(1000,800);
 movingRect = createSprite(600,400,50,80);
movingRect.shapeColor="yellow";
movingRect.debug = true;

fixedRect = createSprite(400,200,80,30);
fixedRect.shapeColor="yellow";
fixedRect.debug = true;

}

function draw() {
  background("navyblue");
  movingRect.x = mouseX;
  movingRect.y = mouseY;

  if(movingRect.x - fixedRect.x < fixedRect.width/2 + movingRect.width/2 &&
   fixedRect.x - movingRect.x < fixedRect.width/2 + movingRect.width/2 &&
   movingRect.y - fixedRect.y < fixedRect.height/2 + movingRect.height/2 &&
   fixedRect.y - movingRect.y < fixedRect.height/2 + movingRect.height/2 ){
    movingRect.shapeColor="red"; 
    fixedRect.shapeColor="red";  
  }
 else{
  movingRect.shapeColor="yellow";
  fixedRect.shapeColor="yellow";
 }
 
  drawSprites();
}