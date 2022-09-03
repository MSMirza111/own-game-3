class Pointer {
   constructor(x,y,img,angle){
    this.x = x;
    this.y = y;
    this.img = img;
    this.angle = angle;
    

   }
   display(){
    if(keyIsDown(UP_ARROW)){
      this.angle += 1;
    }
    if(keyIsDown(DOWN_ARROW)){
      this.angle -= 1;
    }
    push();
    translate(this.x,this.y);
    rotate(this.angle);
    //imageMode(CENTER)
    image(this.img,0,0,40,30);
    pop();
   }

}

