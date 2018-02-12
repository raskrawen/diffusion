
let bobbles = [];
//let a=1;

function setup() {
  createCanvas(windowWidth, windowHeight);
for (let i=0;i<500;i++) {
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
    fill(255,0,0,100);
    stroke(255);
    ellipse(this.x,this.y,this.diameter);
    }

} // end of class
