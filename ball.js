class Ball{
 
 constructor(x,y,img){
 this.img = img;
this.x = x;
this.y = y;

 this.body = Bodies.circle(x,y,20,{isStatic:true});
 World.add(world,this.body);

}
display(){
 var pos = this.body.position;
 push();
 translate(pos.x,pos.y);
 rotate(this.body.angle);
 imageMode(CENTER);
 image(this.img,0,0,50,50);
 pop();



}
shoot(){
  var ang = path.angle*(3.14/180);
  var velocity = p5.Vector.fromAngle(ang);
  velocity.mult(0.3);
  Body.setStatic(this.body,false);
  Body.setVelocity(this.body,{x:velocity.x*(180/3.14),y:velocity.y*(180/3.14)});

 
}

}