const Engine=Matter.Engine
const World=Matter.World
const Bodies=Matter.Bodies
const Constraint=Matter.Constraint
 var engine,world,ground,ball1;
 var slingshot1;
 var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10,box11,box12

function setup() {
  createCanvas(1200,600);
  engine=Engine.create();
  world=engine.world;
  var ground_option={isStatic:true}
  ball1=new ball(300,450,70)
 ground=Bodies.rectangle(600,580,1200,20,ground_option);
  World.add(world,ground);
  slingshot1=new slingshot(ball1.body,{x:500,y:10})
box1=new box(700,550)
box2=new box(700,500)
box3=new box(700,450)
box4=new box(700,400)
box5=new box(800,550)
box6=new box(800,500)
box7=new box(800,450)
box8=new box(800,400)
box9=new box(900,550)
box10=new box(900,500)
box11=new box(900,450)
box12=new box(900,400)
 

}

function draw() {
  background(0,0,0);  
  Engine.update(engine);
  rectMode(CENTER)
   rect(ground.position.x,ground.position.y,1200,20);
   ball1.display()
slingshot1.display()
box1.display()
box2.display()
box3.display()
box4.display()
box5.display()
box6.display()
box7.display()
box8.display()
box9.display()
box10.display()
box11.display()
box12.display()

}
function mouseDragged()
{
  Matter.Body.applyForce(ball1.body,ball1.body.position,{x:100,y:100})                



}