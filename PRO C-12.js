var path,boy, leftBoundary,rightBoundary;
var pathImg,boyImg;
var i;

function preload(){
  
  //loadImage of the path
path.loadImage(path.png);
 
//loadAnimation of the boy
boy.loadAnimation(Runner-1);
 }

function setup(){
  
  createCanvas(400,400);
 //create sprite for the path 
 path= createSprite(200,10,180,50)

 //add image for the path
path.addImage(path.png);

//Make the track a moving background by giving velocity Y.
path= createSprite(200,200);
path.addImage(pathImg);
path.velocityY=4;
path.scale=1.2;

//code to reset the background
if(path.y>400){
  path.y=height/2;
}

path.scale=1.2;

//create a boy sprite
boy= createSprite(60,50,60,60)

//add animation for the boy
boy.addAnimation(Runner-1);
boy.scale=0.08;
  
// create left Boundary
leftBoundary=createSprite(0,0,100,800);

//set visibility as false for left boundary
leftBoundary.visible=false;

//create right Boundary
rightBoundary=createSprite(410,0,100,800);

//set visibility as false for left boundary
leftBoundary.visible=false;
}

function draw() {
  background(0);
  path.velocityY = 4;
  
  // boy moving on Xaxis with mouse
  boy.mouseX
  
  edges= createEdgeSprites();
  boy.collide(edges[3]);
 
  // collide the boy with the left and right invisible boundaries.
  boy.collide(leftBoundary, rightBoundary);
  
  //code to reset the background
  if(path.y > 400 ){
    path.y = height/2;
  }
  
  drawSprites();
}
