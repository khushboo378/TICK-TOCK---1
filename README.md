# p5.play-boilerplate
Boiler plate for p5.play

var hr,sc,mn
var scAngle,mnAngle,hrAngle

function setup(){
  
  createCanvas(400,400)
  angleMode(DEGREES)
  
  //hr=new SlingShot(hr.body,{x:200,y:200})

}

function draw(){
background(0)

hr = hour()
mn = minute()
sc = second()

scAngle = map(sc,0,60,0,360)
hrAngle = map(hr % 12,0,12,0,360)

}

//hand class
class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 4,
            length: 10
        }
        
        this.pointB = pointB 
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }
    

    display(){
        
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            push();
            stroke(48,22,8);
            line(0,0,100,0);
            strokeWeight(7);
            pop();

            
            
        }
    }
    
}
