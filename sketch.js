var starImg, fairyImg, bgImg;
var fairy , fairyVoice;
var star, starBody;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg = loadImage("images/star.png");
	fairyImg = loadAnimation("images/fairyImage1.png","images/fairyImage2.png");
	bgImg = loadImage("images/starNight.png");
	fairyVoice = loadSound("sound/JoyMusic.mp3");

}

function setup() {
	createCanvas(800, 750);

	// fairyVoice.play();
	engine = Engine.create();
	world = engine.world;

	fairy = createSprite(150, 520);
	fairy.addAnimation("fairyflying",fairyImg);  
	fairy.scale =0.25;
	

	star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;
	//World.add(world,star);

	

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);
	//starBody.image = loadImage("images/star.png");

	
	
	Engine.run(engine);

}


function draw() {
  fairyVoice.play();	
  background(bgImg);
  fairy.velocityX=0;
  star.x = starBody.position.x;
  star.y = starBody.position.y;

  if(starBody.position.y>470){
	Matter.Body.setStatic(starBody,true);  
  }

  //starBody.display();
  drawSprites();

}

function keyPressed() {
	if(keyDown("LEFT_ARROW")){
		fairy.velocityX=-10
	}
	
	if(keyDown("RIGHT_ARROW")){
		fairy.velocityX=10;
	}
	if(keyDown("DOWN_ARROW")){
		Matter.Body.setStatic(starBody,false);
	}
	
}