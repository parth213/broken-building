class slingshot
{
    constructor(bodyA,pointB)
    {
        var options={
            bodyA:bodyA,
            pointB:pointB,
            //length:20
        }
     this.catalpult=Constraint.create(options)
     World.add(world,this.catalpult)


    }
    display()
    {
        strokeWeight(5)
        stroke("white")
        line(this.catalpult.bodyA.position.x,this.catalpult.bodyA.position.y,this.catalpult.pointB.x,this.catalpult.pointB.y)




    }



}