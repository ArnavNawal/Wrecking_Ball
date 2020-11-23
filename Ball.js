class Ball {
    constructor(x, y, radius) {
      var options = {
          'restitution':0,
          'frictionAir':0.005,
          'density':2.0
      }
      this.body = Bodies.circle(x, y,radius, options);
      this.radius=radius;      
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
    var angle = this.body.angle;
      push();
    //  translate(pos.x, pos.y);
    //  rotate(angle);
      ellipseMode(RADIUS);
      strokeWeight(4)
      stroke("red")
      fill("yellow");
      ellipse(pos.x, pos.y, this.radius, this.radius);
      pop();
    }
  };