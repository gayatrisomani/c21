const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;

var ground;
var left;
var right;
var top_wall;

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;
  var option = {
    restitution:0.7
  }
  ball = Bodies.circle(200,200,30,option);
  World.add(world,ball)
  btn1 = createImg('right.png');
  btn1.position(220,30)
  btn1.size(50,50)
  btn1.mouseClicked(hForce);

  btn2 = createImg('up.png');
  btn2.position(20,30)
  btn2.size(50,50)
  btn2.mouseClicked(vForce);

  ground =new Ground(200,390,400,20);
  right = new Ground(390,200,20,400);
  left = new Ground(10,200,20,400);
  top_wall = new Ground(200,10,400,20);
 
  rectMode(CENTER);
  ellipseMode(RADIUS);
}

function draw() 
{
  background(51);
  Engine.update(engine);
  ground.show();
  top_wall.show();
  left.show();
  right.show();
  ellipse(ball.position.x,ball.position.y,20);
}
function hForce(){
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0.02,y:0})
}
function vForce(){
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:-0.02})
}
