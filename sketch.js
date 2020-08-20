var helicopterIMG, helicopterSprite, box1 ,Box1IMG;
var packageBody,ground,world,engine;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	Box1IMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	
	engine = Engine.create();
    world = engine.world;


 	box1 = new Box(350, 260, 50,50);
  	World.add(world,box1 );

	helicopterSprite=createSprite(width/2, 150, 10,10);
	helicopterSprite.addImage(helicopterIMG);
	helicopterSprite.scale=0.6;
	World.add(world,helicopterSprite);

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255);


	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:3, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
} 



function draw() {
  rectMode(CENTER);
  background(0); 
  drawSprites();
  Engine.update(engine);
 box1 .display();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on
    
  }
}



