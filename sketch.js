var car,wall;
var speed,weight;

function setup() {
  createCanvas(windowWidth,windowHeight);
  car = createSprite(50, windowHeight/2, 50, 50);
  car.shapeColor = "white";
   
  wall = createSprite(windowWidth-100,windowHeight/2,60,400);
  wall.shapeColor = "white";

  speed = random(55,90);
  weight = random(400,1500);
}

function draw() {
  background(56,56,56);  
  wall.debug = true;
  car.debug = true;
  if (Touch.get>0 || keyDown("space")) {
  car.velocityX = speed; 
  }

  if (wall.x-car.x<wall.width/2+car.width/2) {

    car.velocityX = 0;

    var deformation = 0.5*weight*speed*speed/22509;
    if (deformation>180) {
        car.shapeColor = "red";
    }
    if (deformation<180 && deformation>100) {
      car.shapeColor = "yellow";
    }
    if (deformation<100) {
    car.shapeColor = "green";
    }
  }
  drawSprites();
  fill("gold");
  textSize(50);
  text("Press Space To Start",windowWidth/2,windowHeight-(windowHeight-100));
}
