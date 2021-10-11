class tronco_c extends clasebase
{
    constructor(x, y, height, angle)
    {
        super(x, y, 20, height,angle);
        this.image= loadImage("IMAS/TRONCO.png");
        Matter.Body.setAngle(this.body, angle)
    }
};