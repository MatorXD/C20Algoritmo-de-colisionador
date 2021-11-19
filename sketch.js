var rectangleF,rectangleM;

function setup() {
  createCanvas(800,400);
  rectangleF = createSprite(200, 200, 50, 80);
  rectangleM = createSprite(400,200,80,50);
  rectangleM.shapeColor = "green";
  rectangleF.shapeColor = "blue";
  rectangleM.debug=true;
  rectangleF.debug=true;
}

function draw() {
  background(255,255,255);  
  rectangleM.x = World.mouseX;
  rectangleM.y = World.mouseY;
  console.log(rectangleM.x - rectangleF.x);
  if(rectangleM.x-rectangleF.x<rectangleF.width/2+rectangleM.width/2&&
     rectangleF.x-rectangleM.x<rectangleF.width/2+rectangleM.width/2&&
     rectangleM.y-rectangleF.y<rectangleF.width/2+rectangleM.width/2&&
     rectangleF.y-rectangleM.y<rectangleF.width/2+rectangleM.width/2){
    rectangleM.shapeColor= "red";
    rectangleF.shapeColor= "red";
  }
  else{
    rectangleM.shapeColor= "green";
    rectangleF.shapeColor= "blue";
  }
  
  drawSprites();
}
