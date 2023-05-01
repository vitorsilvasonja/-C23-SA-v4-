const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let world, engine;

var ball

var ground

var btn1

var fan1,fan2

var angle = 20

function setup() {
  createCanvas(600, 600);


  //criar o mundo e atribuir física a ele
  engine = Engine.create();
  world = engine.world

  //criando o botão
  btn1 = createImg("./up.png")
  btn1.size(50,50)
  btn1.position(20,30)
  btn1.mouseClicked(yForce)

  var ballOptions={
    restitution: 0.8,
    frictionAir:0.01
  }

  ball = Bodies.circle(300,100,50,ballOptions)
  World.add(world,ball);

  ground = Bodies.rectangle(300,550,600,20,{isStatic:true})
  World.add(world,ground);

  fan1 = Bodies.rectangle(300,100,100,10,{isStatic:true})
  World.add(world,fan1);

  fan2 = Bodies.rectangle(300,100,10,100,{isStatic:true})
  World.add(world,fan2);

  console.log(ball);
}

function draw() {
    background(0)
    Engine.update(engine)

    rectMode(CENTER)
    ellipseMode(RADIUS)

    ellipse(ball.position.x,ball.position.y,50,50)

    rect(ground.position.x,ground.position.y,600,20)

    fill("red")

    //codigo do ventilador
    Body.rotate(fan1,angle)
    Body.rotate(fan1,angle+20)

    push()
    translate(fan1.position.x,fan1.position.y)
    rotate(angle)
    fill("yellow")
    rect(0,0,100,10)
    pop()

    push()
    translate(fan2.position.x,fan2.position.y)
    rotate(angle+20)
    rect(0,0,10,100)
    pop()

    //

    angle += 0.1


}

function yForce(){
  Body.applyForce(ball,{x:0,y:0},{x:0,y:-0.5})
}

