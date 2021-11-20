var hr,mn,sc,hrAngle,scAngle,mnAngle

function setup() {
  createCanvas(400, 400);

}

function draw() {
  background(220);
  
  hr = hour();
  mn = minute();
  sc = second();
 
  
  
  angleMode(DEGREES);


  hrAngle = map(hr % 12,0,12,0,360);
  mnAngle = map(mn,0,60,0,360)
  scAngle = map(sc,0,60,0,360)
  //sAngle = map(sc,0,60,0,360);
  
  
  

  
  
  
  translate(200,200)

  
  
  push();
  rotate(hrAngle);
  rotate(-90)
  stroke("red")
  strokeWeight(5)
  line(0,0,50,0)
  pop();
  
  push();
  rotate(mnAngle)
  rotate(-90)
  stroke("blue")
  strokeWeight(5)
  line(0,0,70,0)
  pop();
  
  push();
  rotate(-100);
  rotate(scAngle);
  stroke("green")
  strokeWeight(5)
  line(0,0,80,0)

  pop();
  
 
  push();
 rotate(-5);
  noFill();
  stroke("green");
  strokeWeight (8);
  let a = arc(0,0,216,216,270,scAngle-95);
  pop();
  
  push();
  rotate(-5);
  noFill();
  stroke("blue");
  strokeWeight (10);
  let x = arc(0,0,198,198,270,mnAngle-90);
  pop();

  
  push();
  rotate(-10);
  noFill();
  stroke("red");
  strokeWeight (10);
  let b = arc(0,0,180,180,270,hrAngle-90)
  

  //CLOCK NUMBERS;
fill("black")
  textSize(50);

  text("12",-20,-120);
  

  text ("09",-170,-1);
  
   
  text("06",-20,155);
  

  text("03",120,-1);


  
}