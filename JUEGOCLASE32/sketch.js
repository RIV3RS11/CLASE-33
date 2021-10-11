const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Restriccion = Matter.Constraint;

var engine, world,paj,fondo, plataforma;
var caj, caj1, caj2, suel, cerd, tronc, bas_resort;
var caj3, cerd1, tronc1,caj4, tronc2, tronc3;
var atributos, resortera;

function preload()
{
    fondo=loadImage("IMAS/FONDO.png")
}

function setup(){
    createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    
    suel = new suelo(600,height,1200,20);
    plataforma = new suelo(150,305,300,170);
    caj = new caja_c(700,320,70,70);
    caj1 = new caja_c(920,320,70,70);    
    cerd= new cerdo_c (810,350);
    tronc= new tronco_c(810,260,300,PI/2);
  
    caj2 = new caja_c(700,240,70,70);
    caj3 = new caja_c(920,240,70,70);    
    cerd1= new cerdo_c (810,220);
    tronc1= new tronco_c(810,180,300,PI/2);
    
    caj4= new caja_c(810,160,70,70);
    tronc2 = new tronco_c(760,120,150, PI/7);
    tronc3 = new tronco_c(870,120,150, -PI/7);
  
    paj= new pajaro(100,100);
    
    bas_resort = new tronco_c (230,180,80,PI/2)

    atributos= 
    {
        bodyA: paj.body, 
        bodyB: bas_resort.body,
        stiffness: 0.04,
        length: 10
    }
    resortera = Restriccion.create(atributos);
    World.add(world,resortera);
}

function draw(){
    background(fondo);
    Engine.update(engine);
  
    caj.display();
    caj1.display();
    suel.display();
    cerd.display();
    tronc.display();
  
    caj2.display();
    caj3.display();
    cerd1.display();
    tronc1.display();
    
    caj4.display();
    tronc2.display();
    tronc3.display();
  
    paj.display();

    plataforma.display();

    bas_resort.display();
    strokeWeight(3);
    line(paj.body.position.x, paj.body.position.y, bas_resort.body.position.x, bas_resort.body.position.y);
}