const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine;
var world;
var ground;
var slingshot;
var score;





function setup() {
  createCanvas(900,400);


  engine = Engine.create();
  world = engine.world;

  Engine.run(engine)

  var options = {
    restitution:0.2
  } 

  score = 0;

  ball = Bodies.circle(50,200,20,options)
  World.add(world,ball)

  slingshot = new SlingShot(this.ball,{x:100,y:300})

  

  ground = new Ground(460,300,210,20);

  block1 = new Box(370,270,30,40);
  block2 = new Box(400,270,30,40);
  block3 = new Box(430,270,30,40);
  block4 = new Box(460,270,30,40);
  block5 = new Box(490,270,30,40);
  block6 = new Box(520,270,30,40);
  block7 = new Box(550,270,30,40);

  block8 = new Box(400,230,30,40);
  block9 = new Box(430,230,30,40);
  block10 = new Box(460,230,30,40);
  block11 = new Box(490,230,30,40);
  block12 = new Box(520,230,30,40);

  block13 = new Box(430,190,30,40);
  block14 = new Box(460,190,30,40);
  block15 = new Box(490,190,30,40);

  block16 = new Box(460,150,30,40);

 
  


}

function draw() {
  background(0,0,0);  

  text("SCORE = "+ score,750,40)

  ground.display();

  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();

  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();

  block13.display();
  block14.display();
  block15.display();

  block16.display();

  block1.score();
  block2.score();
  block3.score();
  block4.score();
  block5.score();
  block6.score();
  block7.score();
  block8.score();
  block9.score();
  block10.score();
  block11.score();
  block12.score();
  block13.score();
  block14.score();
  block15.score();
  block16.score();

  ellipseMode(CENTER)
  ellipse(ball.position.x,ball.position.y,40,40)

  slingshot.display();


  
}


function mouseDragged() {
  Matter.Body.setPosition(this.ball,{x:mouseX,y:mouseY})
}

function mouseReleased() {
  slingshot.fly();
}

function keyPressed(){
  if(keyCode === 32){
  slingshot.attatch(this.ball)
  }
}

async function getTime(){
  var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata")
  console.log(responseJSON)
}