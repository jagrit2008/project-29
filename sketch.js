const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine,world


var holder,ball,ground;
var stand1,stand2;
var ball;
var SlingShot;

function preload () {

}

function setup(){
engine=Engine.create();
world=engine.world

createCanvas(900,400);
ground=new Ground

//level one
block1= new Box(200,275,30,40)
}

function draw(){
rectMode(CENTER);
rect(20,200,50,50)
background(0);

Engine.update(engine);
    block1.display();


drawSprites();
}