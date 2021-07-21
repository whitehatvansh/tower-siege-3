class Box{
    constructor(x, y, width, height) {
        var options = {
            'restitution':0.1,
            'friction':0.0,
          
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        
        World.add(world, this.body);
        this.image=loadImage("aluminum-48427.jpg")
        this.visibility = 255

      
      }

      score(){
        if(this.visibility<0 && this.visibility>-105 ){
          score++
        }
      }

      display(){
        if(this.body.speed < 3){
        var angle = this.body.angle;
        push();

        
        //translate(this.body.position.x, this.body.position.y)

        rotate(angle);
        imageMode(CENTER);
        image(this.image,this.body.position.x,this.body.position.y,this.width,this.height)
        pop();
        }

        else{
          push();
          World.remove(world,this.body)
          this.visibility = this.visibility - 5
          tint(255,this.visibility)
          imageMode(CENTER)
          image(this.image,this.body.position.x,this.body.position.y,this.width,this.height) 

          pop();
          
        }
      }
}