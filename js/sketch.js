let myCars = [];

function setup() {
  

  createCanvas(800,600);
  
  //myCars = new Car[100];
  for(let i = 0; i <100; i++){
    myCars[i] = new
    Car(random(width),random(height),1,random(360));
  }
    
    
  
}

function draw(){
  background(255);
  
  for (let j = 0; j <100; j ++){
    
  
myCars[j].drive();
  myCars[j].display();
  myCars[j].flip();
  }
}

  class Car {
    
    constructor(tempXpos,tempYpos,tempXspeed,tempXdegree){
      this.xpos = tempXpos;
      this.ypos = tempYpos;
      this.xspeed = tempXspeed;
      this.xdegree = tempXdegree;
      
    }
    
    display(){
      
    push();
      stroke(0);
      
      translate(this.xpos,this.ypos);
      rotate(radians(this.xdegree));
      rectMode(CENTER);
      rect(0,0,20,10);
      pop();
  }
  
  drive() {
    this.xpos = this.xpos + this.xspeed;
    if (this.xpos > width){
      this.xpos = 0;
    }
  }
    flip(){
      this.xdegree ++;
    }
    }