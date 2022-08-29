var ball;
var ball2;

function setup() {
  //createCanvas(widthOfCanvas, heightOfCanvas);
  createCanvas(800,600);

  ball = createSprite(100,80,10,10);

  ball2 = createSprite(200,90,50,50);
  
}

function draw() 
{
  background("blue");

  if(keyDown(LEFT_ARROW)){

    ball2.x = ball2.x - 2;

  }

  if(keyDown(RIGHT_ARROW)){
    ball2.x = ball2.x + 2;
  }

  drawSprites();

}




