const Engine = Matter.Engine;
const World = Matter.World;
const Body = Matter.Body;
const Bodies = Matter.Bodies;

 var engine,world
var bgImg;
var pool = [];

function preload(){
bgImg = loadImage("assets/table.png");
ballImg = loadImage("assets/ball.png");
ball1Img = loadImage("assets/ball1.png");
ball2Img = loadImage("assets/ball2.png");
ball3Img = loadImage("assets/ball3.png");
ball4Img = loadImage("assets/ball4.png");
ball5Img = loadImage("assets/ball5.png");
ball6Img = loadImage("assets/ball6.png");
ball7Img = loadImage("assets/ball7.png");
ball8Img = loadImage("assets/ball8.png");
ball9Img = loadImage("assets/ball9.png");

pointerImg = loadImage("assets/pointer.png");
} 
  

 function setup(){
 createCanvas(900,600);
 
 engine = Engine.create();
 world = engine.world;
 angleMode(DEGREES);
 angle = 0;

 ball = new Ball(200,300,ballImg);
 path = new Pointer(ball.x-1,ball.y-16,pointerImg,angle);
 ball1 = new Ball(420,120,ball1Img);
 ball2 = new Ball(559,348,ball2Img);
 ball3 = new Ball(559,304,ball3Img);
 ball4 = new Ball(600,372,ball4Img);
 ball5 = new Ball(600,327,ball5Img);
 ball6 = new Ball(600,283,ball6Img);
 ball7 = new Ball(640,390,ball7Img);
 ball8 = new Ball(650,333,ball8Img);


   
    
 }
                                                                                                 
function draw(){
 background(150);
 image(bgImg,-30,-2,950,660);
 ball.display();
 ball1.display();
 ball2.display(); 
 ball3.display(); 
 ball4.display(); 
 ball5.display();   
 ball6.display(); 
 ball7.display(); 
 ball8.display();





 path.display();
 Engine.update(engine);
} 
function keyPressed(){
 if(keyCode === 13 ){
  Body.setAngle(ball.body, path.angle);
  ball.shoot();
 } 
}

 function keyReleased(){
  if(keyCode === 13){
    var collision  = Matter.SAT.collides(ball.body,ball1.body)
    if(collision.collided){
      console.log("collided")
      Body.setStatic(ball.body,true);
  }
  }
 } 