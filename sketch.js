const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

var ground
var rope
var fruit
var fruit_connect

let engine;


let world;

function setup() {
  createCanvas(500, 700);
  engine = Engine.create();
  world = engine.world;





  rectMode(CENTER);
  ellipseMode(RADIUS);
  textSize(50)

  ground = new Ground(250, 690, 700, 20);
  rope = new Rope(7, { x: 125, y: 30 });
  fruit = Bodies.circle(125, 90, 10);

  Matter.Composite.add(rope.body, fruit);
  fruit_connect = new Link(rope, fruit);

}

function draw() {
  background(51);
  Engine.update(engine);

  ground.display()
  rope.show()

  ellipse(fruit.position.x, fruit.position.y, 10, 10);

}




