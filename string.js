class String{
    constructor(bodyA,x,y){

        this.x = x;
        this.y = y;

        var options = {
            bodyA: bodyA,

            pointB:{x:this.x,y:this.y}
        }

        this.string = Constraint.create(options);
        World.add(world,this.string);
    }

    display(){
        var posA = this.string.bodyA.position;

        push();
        stroke("white");
        line(posA.x,posA.y,this.x,this.y);
        pop();
    }
}