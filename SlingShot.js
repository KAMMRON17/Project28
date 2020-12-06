class SlingShot{
    constructor(bA, pB){
        var options = {
            bodyA: bA,
            pointB: pB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB=pB;
        this.bodyA=bA;
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }

    display(){
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(4);
            line(pointA.x, pointA.y, pointB.x, pointB.y);

        }
       
    }
  fly(){
      this.sling.bodyA=null;
  }
}
