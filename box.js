class box
{
   constructor(x,y)
   {
       var options={
           restitution:0.8,
           density:1.0,
           friction:0.8
       }
       this.body=Bodies.rectangle(x,y,70,70,options)
       World.add(world,this.body)
    



   }
   display()
   {
       fill("blue")
       rectMode(CENTER)
    rect(this.body.position.x,this.body.position.y,70,70)


   }


}