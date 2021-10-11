class Resortera 
{
    constructor(bodyA, pointB){
        var atributo = 
        {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }

        //llamar las imagenes de la resortera
        this.honda1 = loadImage('IMAS/sling1.png');
        this.honda2 = loadImage('IMAS/sling2 - resortera 2.png');
        this.honda3 = loadImage('IMAS/sling3 - resortera 3.png');
        this.pointB = pointB;
        this.honda = Restriccion.create(atributo);
        World.add(world, this.honda);
    }
    attach(body){
        this.honda.bodyA = body;
    }
    

    fly(){

        this.honda.bodyA=null;
    }

    display ()
    {
        //imprimirlo

        image(this.honda1,200,20);
        image(this.honda2,170,20);
        if(this.honda.bodyA){
        var  pointA, pointB;
        
        pointA = this.honda.bodyA.position;
        pointB = this.pointB;
        
        push();
        
        //agregamos el color de la liga
        stroke(48,22,8);

       //agregamos una condicion 
       if(pointA.x < 220){


       
        strokeWeight(10);
        line(pointA.x - 20, pointA.y, pointB.x - 10, pointB.y);
        line(pointA.x - 20, pointA.y, pointB.x + 30, pointB.y - 3);
        image(this.honda3,pointA.x - 30, pointA.y - 10, 15, 30);
       }
            else{
                strokeWeight(10);
                line(pointA.x +25, pointA.y, pointB.x - 10, pointB.y);
                line(pointA.x + 25, pointA.y, pointB.x + 30, pointB.y - 3);
                image(this.honda3,pointA.x - 30, pointA.y - 10, 15, 30);

            }

        pop();
    }}
}