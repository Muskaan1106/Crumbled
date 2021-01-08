
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var log1,log2,log3;
var ground;
var ball;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(600,570,1200,20);
  log1=new Dustbin(930,550,280,20);
	log2=new Dustbin(1050,490,20,100);
  log3=new Dustbin(800,490,20,100);
  ball=new  PaperBall(70,450);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("purple");
  Engine.update(engine);
  log1.display();
  log2.display();
  log3.display();
  ground.display();
  ball.display();

 drawSprites();
}


function keyPressed() {
	if (keyCode === UP_ARROW) {

		Matter.Body.applyForce(ball.body,ball.body.position,{x:80,y:-85});

  }
}