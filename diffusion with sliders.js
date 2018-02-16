
let bobbles = [];
let speedOld = 5;
let numberOld= 100;
//let a=1;

function setup() {
  createCanvas(windowWidth, windowHeight);
  colorSlider = createSlider(0, 255, 100);
  colorSlider.position(20, 20);
  numberSlider = createSlider(0, 500, 100);
  numberSlider.position(20, 50);
   speedSlider = createSlider(0, 20, 5);
  speedSlider.position(20, 80);
  numberOld=100;
  speedOld=5;
  for (let i=0;i<100;i++) {
    let x=width/2;
    let y=height/2;
    let r=random(10,50);
    let speed=random(5,10);
    bobbles[i]=new Bobble(x,y,r,speed);
  }
//bobble2 = new Bobble(300,100,20);
//print(bobble1.x);
}

function draw() {
  
  background(0,150,20);
    //fill(0,200,20);
    for (let i=0;i<bobbles.length;i++) {
        bobbles[i].move();
        bobbles[i].displaying();
    }
  //NUMBER:
  if (numberSlider.value()!=numberOld) { //if new slider position
    let x=width/2;
    let y=height/2;
    let speed=speedSlider.value();
    bobbles = []; // delete old bobbles
    for (let i=0;i<numberSlider.value();i++) {
     let r=random(10,50);
      bobbles[i] = new Bobble(x,y,r,speed); // make new bobbles 
     }
 
    numberOld = numberSlider.value();
}
//SPEED: 
  if (speedSlider.value()!=speedOld) { //if new slider position
    for (let i=0;i<bobbles.length;i++) {
     bobbles[i].speed = speedSlider.value();
    }
    speedOld=speedSlider.value();
  }
  
}



function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

class Bobble {

constructor(x,y,diameter,speed) {
    this.x=x;
    this.y=y;
    this.diameter=diameter;
    this.speed = speed;
    }

check() {
    if (this.x<this.diameter/2) { //left boundary
        this.x=this.x+3;
    }
    if (this.x>windowWidth-this.diameter/2) { //right boundary
        this.x=this.x-3;
    }
    if (this.y<this.diameter/2) { //top boundary
        this.y=this.y+3;
    }
    if (this.y>windowHeight-this.diameter/2) { //buttom boundary
        this.y=this.y-3;
    }
}

move() {
    this.x=this.x+random(-this.speed,this.speed);
    this.y=this.y+random(-this.speed,this.speed);
    this.check();
    //this.diameter=this.diameter+random(-1,1);
    }

displaying() {
    let color = colorSlider.value();
    fill(color,0,0,100);
    stroke(255);
    ellipse(this.x,this.y,this.diameter);
    }

} // end of class
