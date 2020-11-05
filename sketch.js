
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;


// function preload()
// {
	
// }
var int = 0;
var bobD = 0;


function setup() {
	createCanvas(1500,700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roof = new Roof(750,50,500,40);
	bob1 = new Bob(610,650);
	string1 = new String(bob1.body,bob1.body.position.x,50);
	
	bob2 = new Bob(680,650);
	string2 = new String(bob2.body,bob2.body.position.x,50);
	
	bob3 = new Bob(750,650);
	string3 = new String(bob3.body,bob3.body.position.x,50);
	
	bob4 = new Bob(820,650);
	string4 = new String(bob4.body,bob4.body.position.x,50);
	
	bob5 = new Bob(890,650);
	string5 = new String(bob5.body,bob5.body.position.x,50);

	Engine.run(engine);

	Body.applyForce(bob1.body,bob1.body.position,{x:-230,y:-190});
}


function draw() {
  	rectMode(CENTER);
  	background(0);
  
  	drawSprites();
	  

	roof.display();
	string1.display();
	bob1.display();
  
	string2.display();
	bob2.display();
 
	string3.display();
	bob3.display();
 
	string4.display();
	bob4.display();
 
	string5.display();
	bob5.display();

}
