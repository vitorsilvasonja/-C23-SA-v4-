


//Crie um namespace (espaço de nomes) para Mecanismo
//Crie um namespace (espaço de nomes) para Mundo
//Crie um namespace (espaço de nomes) para Corpos
//Crie um namespace (espaço de nomes) para Corpo


function setup() {
  createCanvas(400,400);
//crie o mecanismo
  //Adicione mundo ao mecanismo
  

  
   var ball_options = {
    restitution: 0.95,
    frictionAir:0.01
  }
   
   var ground_options ={
     isStatic: true
   };
  
  
//crie o solo
//adicione ao mundo

  ball = Bodies.circle(100,10,20,ball_options);
  World.add(world,ball);
  
  
  

  rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() 
{
  background(51);
  Engine.update(engine);
  
  

  ellipse(ball.position.x,ball.position.y,20);
  //escreva uma função de retângulo para exibir o solo.
 


  
  
}

