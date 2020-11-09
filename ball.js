class ball
{
  constructor(x,y,radius)
  {
      var options={
        restitution:1.0,
        density:1.0,
        friction:0.8  
      }
   this.body=Bodies.circle(x,y,radius,options)
   World.add(world,this.body)
   this.radius=radius


  }
  display()
  {
      ellipseMode(RADIUS)
      fill("red")
    ellipse(this.body.position.x,this.body.position.y,this.radius,this.radius)
    

  }


}