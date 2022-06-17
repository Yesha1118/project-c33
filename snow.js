class Snow{
    constructor(x,y){
     var options={
         restitution:0.04,
         friction:0,

     }

     this.body=Bodies.circle(x,y,10,options);
     this.r=10;
     this.image=loadImage("snow4.webp");
     World.add(world,this.body);
    }
    display(){
      var pos=this.body.position;
      var angle=this.body.angle;
      push();
      translate(pos.x,pos.y);
      rotate(angle);
      imageMode(CENTER);
      image(this.image,pos.x,pos.y,60,60);

      pop();
    }
}