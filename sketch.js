var fixed
var move
var box

function setup() {
  createCanvas(800,400);
  move = createSprite(400, 200, 50, 50);
  move.shapeColor = "blue"
  fixed = createSprite(300,200,50,50);
  //fixed.velocityX = 1
  fixed.velocityY = 1
  fixed.shapeColor = "green"
  box = createSprite(400,200,70,70)
  box.shapeColor = "purple";
  bounce1 = createSprite(300,300,50,50)
  
}

function draw() {
  background(255,255,255);  
  drawSprites();

  move.x = mouseX
  move.y = mouseY

  if(icollide(box,move) === true) {
  box.shapeColor = "red"
  move.shapeColor = "yellow"
  }
  else {

  box.shapeColor = "purple"
  move.shapeColor = "blue"
  }

  bounceOff(fixed,bounce1)


  
}
function icollide(object1,object2) {
  if(object1.x - object2.x <= object1.width/2 + object2.width/2 && 
    object2.x - object1.x <= object1.width/2 + object2.width/2 &&
    object1.y -object2.y <=object1.height/2 + object2.height/2 &&
    object2.y - object1.y <= object2.height/2 + object1.height/2) {
   // object2.shapeColor = "purple"
    //object1.shapeColor = "yellow"
    return true;

  }
else{
 // object2.shapeColor = "green"
  //object1.shapeColor = "blue"
   return false;

}


}
function bounceOff(object1,object2) {
  if(object1.x - object2.x <= object1.width/2 +object2.width/2 && 
    object2.x - object1.x <= object1.width/2 + object2.width/2 ) {

      object1.velocityX = -1*object1.velocityX

    }
    
    if(object1.y - object2.y <= object1.height/2 + object2.height/2 &&
    object2.y - object1.y <= object2.height/2 + object1.height/2)  {

      object1.velocityY = -1*object1.velocityY
    }


    
}
  
