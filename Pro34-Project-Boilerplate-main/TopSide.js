class TopSide {
    constructor(x, y, width, height) {
      var options = {
        isStatic: true,
      };
      this.x = x;
      this.y = y;
      this.width = width;
      this.height = height;
      this.body = Bodies.rectangle(x, y, width, height, options);
      World.add(world, this.body);
    }
    display() {
      push();
      rectMode(CENTER);
      fill("orange");
      stroke("pink");
      strokeWeight(2);
      rect(this.body.position.x, this.body.position.y, this.width, this.height);
      pop();
    }
    detach()
    {
      World.remove(engine.world,this.body);
     
    }
  }