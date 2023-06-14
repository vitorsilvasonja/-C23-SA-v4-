const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint= Matter.Constraint


let world, engine;

var ball,ball2,ball3

var rope,rope2

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

  ball = Bodies.circle(500,100,50,ballOptions)
  World.add(world,ball);

  ball2 = Bodies.circle(500,100,50,ballOptions)
  World.add(world,ball2);

  ball3 = Bodies.circle(500,100,50,ballOptions)
  World.add(world,ball3);

rope=Constraint.create({
  bodyA:ball,
  pointA:{x:0,y:0},
  bodyB:ball2,
  pointB:{x:0,y:0},
  length:100,
  stiffness:0.001

})

World.add(world,rope)

rope2=Constraint.create({
  bodyA:ball2,
  pointA:{x:0,y:0},
  bodyB:ball3,
  pointB:{x:0,y:0},
  length:100,
  stiffness:0.001
})

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

    ellipse(ball2.position.x,ball2.position.y,50,50)

    ellipse(ball3.position.x,ball3.position.y,50,50)

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

  line(ball.position.x,ball.position.y,ball2.position.x,ball2.position.y)
  line(ball2.position.x,ball2.position.y,ball3.position.x,ball3.position.y)
}

function yForce(){
  Body.applyForce(ball,{x:0,y:0},{x:0,y:-0.5})
}

