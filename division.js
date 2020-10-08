class Division{
    constructor(x,y,w,h){
     var options = {
         isStatic:true
     }
     this.body=Bodies.rectangle(x,y,w,h,options);
     this.w = w;
     this.h = h;
     World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;
        rectMode(CENTER);
        fill("white");
        rect(pos.x,windowHeight-150,this.w,this.h);
    }
};