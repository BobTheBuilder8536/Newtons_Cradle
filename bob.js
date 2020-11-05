class Bob{
    constructor(x,y){

        var options = {
            density: 1
        }

        this.body = Bodies.circle(x,y,35,options);
        World.add(world,this.body);

    }

    display(){

        var pos = this.body.position;

        circle(pos.x,pos.y,70);
    }
}