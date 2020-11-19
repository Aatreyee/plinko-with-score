const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const World = Matter.World;

var engine;
var world;
var ground;
var divisions=[];
var particles=[];
var plinkos=[];
var particle;


function setup() {
  createCanvas(480,800);

  engine = Engine.create();
  world = engine.world;
  
  ground = new Ground( width/2,height-5,width,10);

  for(var k=0;k<=width;k=k+80)
  {
    divisions.push(new Divisions(k ,height-150));
  }

  for(var j=40;j<=width;j=j+50){

    plinkos.push(new Plinko(j,75));

  }

  for(var j=15;j<=width;j=j+50){

    plinkos.push(new Plinko(j,175));
    
  }

  for(var j=40;j<=width;j=j+50){

    plinkos.push(new Plinko(j,275));
    
  }

  for(var j=15;j<=width;j=j+50){

    plinkos.push(new Plinko(j,375));
    
  }

  

}

function draw() {
  background(0);  
  Engine.update(engine);
  ground.display();

  if(frameCount%60===0){
    particles.push(new Particle(random(200,300),10));
  }

  for(var k=0;k<divisions.length;k++){
    divisions[k].display();
  }

  for(var j=0;j<plinkos.length;j++){
    plinkos[j].display();
  }

  for(var j=0;j<particles.length;j++){
   particles[j].display();
  }
  
}

