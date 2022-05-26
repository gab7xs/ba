
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var chao;

var parede1;
var parede2;

var ball

function preload()
{
	
}

function setup() {
	createCanvas(1920, 1080);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
   
    var options = {
		isStatic : true
	}


	chao = Bodies.rectangle(width/2, height - 50, 1920, 20, options)
    World.add(world,chao)
    
	parede1 = Bodies.rectangle(1500, height - 100, 10, 100, options)
	World.add(world,parede1)

	parede2 = Bodies.rectangle(1700, height - 100, 10, 100, options)
	World.add(world,parede2)

	ball = Bodies.circle(200, 500, 20)
	World.add(world,ball)
}


function draw() {
  rectMode(CENTER);
  ellipseMode(RADIUS)
  background(0);
  

  rect(chao.position.x, chao.position.y, 1920, 20)
 
  rect(parede1.position.x, parede1.position.y,10, 100)

  rect(parede2.position.x, parede1.position.y,10, 100)
 
  ellipse(ball.position.x, ball.position.y, 20)
}

function keyPressed(){

   if(keyCode === UP_ARROW){

	Matter.Body.applyForce(ball, {x : 0, y: 0}, {x : 0.01, y : 0.01})

   }




}

