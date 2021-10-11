const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Restriccion = Matter.Constraint;

var engine, world,paj,fondo, plataforma;
var caj, caj1, caj2, suel, cerd, tronc, bas_resort;
var caj3, cerd1, tronc1,caj4, tronc2, tronc3;
var atributos, resortera;




//llamr a la funcion getb
function preload()
{
    getBackgroundImg()
   // fondo=loadImage("IMAS/FONDO.png")
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
  
    paj= new pajaro(200,50);
    
   bas_resort = new tronco_c (530,180,180,PI/2);
    resortera = new Resortera (paj.body,{x:200, y:50});
    
}

function draw(){
    //condicionar el fondo
    if(fondo)
    background(fondo);

    noStroke();
    textSize(35)
    fill("white")
    //text("Puntuación  " + score, width-300, 50)

    //background(fondo);
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
    resortera.display();
    
}

function mouseDragged(){
  Matter.Body.setPosition(paj.body, {x: mouseX, y: mouseY})

}

function mouseReleased(){
 resortera.fly();
}

//agregamos la funcion para presionar una tecla y volver al pajaro a la resortera
//cada tecla tiene un codigo llamado ascci
function keyPressed(){
    if(keyCode === 32){
        //cuando se preione la tecla el pajaro ira a la resrtera
        resortera.attach(paj.body);
        paj.trayectoria=[]
         Matter.Body.setPosition(paj.body, {x:200, y:  50})

    }

}

//creamos la funcion para saber el horario

//debemos hacer que espere que se ejecuten algunas lineas de codigo 
//para que ejecute la llamada a la api
//para eso hacemos la funcion asincrona
//async   
/*async function getTime(){
  //creamos una variable 
  //fetch llamamos a una API
  var respuesta= await fetch("http://worldtimeapi.org/api/timezone/Asia/Tokyo")

//creamos una variblaae para llamar json
var respuestajson= await respuesta.json();
console.log(respuestajson)

}*/
async function getBackgroundImg(){
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Tokyo");
    var responseJSON = await response.json();

    var datetime = responseJSON.datetime;
    var hour = datetime.slice(11,13);
    
    if(hour>=06 && hour<=19){
        bg = "IMAS/bg1.png";
    }
    else{
        bg = "IMAS/bg2.jpg";
    }

    fondo = loadImage(bg);
    console.log(fondo);
}

