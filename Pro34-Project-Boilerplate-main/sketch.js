
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var bomb;



function setup() {
  createCanvas(700,700);

  engine = Engine.create();
  world = engine.world;
  bomb_options={
    isStatic: false,
    restitution: 0.4,
    friction: 1,
    density: 2.3,
  }

  bomb = Bodies.circle(500, 450, 20, bomb_options);
  World.add(world,bomb);

  left = new Box(275,125,10,150);
  right = new Box(425,125,10,150);
  topSide = new TopSide(350,50,158,10);
  bottom = new TopSide(350,200,158,10);
  ground = new Box(350,690,900,10);
  Engine.run(engine);
}


function draw() 
{
  background(51);
  ellipseMode(RADIUS);
  ellipse(bomb.position.x, bomb.position.y, 20, 20);
  Engine.update(engine);
  left.display();
  right.display();
  topSide.display();
  bottom.display();
  ground.display();
if(bomb.isTouching(left)){
  Box.detach();
}

}
function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(bomb,bomb.position,{x:0,y:-85});
	}
  if(keyCode===RIGHT_ARROW){
		Matter.Body.applyForce(bomb,bomb.position,{x:50,y:0});
	}	
  if(keyCode===DOWN_ARROW){
		Matter.Body.applyForce(bomb,bomb.position,{x:0,y:85});
	}	
  if(keyCode===LEFT_ARROW){
		Matter.Body.applyForce(bomb,bomb.position,{x:-50,y:0});
	}
}







