const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var SuperMan;
var engine, world;
var background;
var background;
var Matter;



function preload(){
SuperMan = loadImage("SuperMan.jpg");
background = loadImage("backdrop.jpg");
}

function setup(){
  var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    SuperMan.addImage(World,SuperMan);

}

function draw(){
  background(background);
  Engine.update(engine);
  SuperMan.display();
  drawSprites();
}


