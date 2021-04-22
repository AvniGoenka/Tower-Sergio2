class Block extends Baseclass {
      constructor(x, y, width, height){
        super(x,y,width,height);
        this.visibility=255;
      }
  display(){
    if(this.body.speed<6){
      super.display();
    }
    else{
      World.remove(world,this.body);
      push();
      this.Visiblity=this.Visibility-5;
      tint(255,this.Visiblity);
      pop();
    }
  }
};  