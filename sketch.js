var weight;
var wall;
var thickness;
var speed;
var car;
function setup() {
  createCanvas(1600,400);
  thickness = random(22,83);
  fill(80,80,80);
  wall = createSprite(1200,200,thickness,200);
  wall.shapeColor = color(80,80,80);
  speed = random(223,321);
  weight = random(30,52);
  car = createSprite(200,200,50,20);
  car.velocityX = speed;
  car.shapecolor = color("white");
}

function draw() {
  background(0);  
  
  if(wall.x - car.x < (car.width + wall.width)/2){
    
    var deform  = 0.5 * weight * speed * speed/ (thickness * thickness * thickness);
    if(deform>10){
      wall.shapeColor=color("red");
    }
    if(deform<10){
      wall.shapeColor=color("green");
    }

  }
  car.collide(wall);
  drawSprites();
}