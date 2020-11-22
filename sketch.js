var movingRect,fixedRect
function setup() {
  createCanvas(800,800);
 fixedRect =  createSprite(600, 200, 50, 50);
 fixedRect.shapeColor ="red";
 fixedRect.debug=true;

 fixedRect.velocityX=-2
 movingRect = createSprite(200,200,50,50);
 movingRect.shapeColor="red";
 movingRect.debug=true
 movingRect.velocityX=2
}

function draw() {
  background(0);
 
  if(movingRect.x - fixedRect.x <= fixedRect.width/2 + movingRect.width/2 &&
    fixedRect.x - movingRect.x <= fixedRect.width/2 + movingRect.width/2 ){

      movingRect.velocityX=movingRect.velocityX *(-1)
      fixedRect.velocityX=fixedRect.velocityX*(-1)
   
  }else if(movingRect.y - fixedRect.y <= fixedRect.height/2 + movingRect.height/2 &&
    fixedRect.y - movingRect.y <= fixedRect.height/2 + movingRect.height/2){
      movingRect.velocityY=movingRect.velocityY *(-1)
      fixedRect.velocityY=fixedRect.velocityY*(-1)
    

  }


  drawSprites();
}