class pajaro extends clasebase
{
    constructor(x,y)
    {
        super(x,y,50,50);
        this.image= loadImage("IMAS/AVEE.png");
        //cargamos la imagen de humo
        this.humo= loadImage("IMAS/smoke.png");
        //agregamos la trayectoria
        this.trayectoria = [];
    }
    display() 
    {
        /*
        this.body.position.x = mouseX;
        this.body.position.y = mouseY;*/
        
        super.display();

        //agregamos la matriz de la trayctoria
        var position= [this.body.position.x, this.body.position.y];
        this.trayectoria.push(position);

        //dibujaremos el humo con un bucle for
        for (var i=0; i<this.trayectoria.length; i++){
            image(this.humo, this.trayectoria[i][0], this.trayectoria[i][1])
        }
    }
}