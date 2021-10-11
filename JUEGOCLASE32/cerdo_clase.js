class cerdo_c extends clasebase
{
    constructor(x, y)
    {
        super(x, y, 50, 50);
        this.image= loadImage("IMAS/CERD.png");
        //sirve para dar la apariencia de visibilidad 0 - 255 tercero
        this.Visiblity = 255;
    
    }

    display(){
        //mostrar la velocidad speed al imprimir  primer paso
if(this.body.speed < 3){
    super.display();
}
else{

//este codigo sirve para quitar a los cerdos de la pantalla sgundo
    World.remove(world,this.body);
    push();//sirve para que solo a los cerdos les afecte los codigos siguientes

    //quinto-hacemos que la velocidad de la imagen vaya disminuyendo.
this.Visiblity = this.Visiblity - 5;

//cuarto - agregamos el codigo tint mostrar y dar a matiz a la imagen que se vera normal
    tint(255,this.Visiblity);
    //agregamos la imagen que debe aparecer
image(this.image, this.body.position.x, this.body.position.y, 50,50)

pop();
}

    };

    score(){
        if(this.Visiblity < 0 && this.Visiblity > -1005)
        score++;
        }

}
