class Star {
  constructor() {
    this.x = random(-width, width);
    this.y = random(-height, height)
    this.travel = random(width);
  }

  warp() {
    this.travel = this.travel - 15
    if (this.travel < 1){
      this.travel = random(width);
    }
  }

  show() {
    stroke(255, 255, 255)
    this.ellipseGrow = map(this.travel, 0, width, 5, 0)
    ellipse(this.moveX, this.moveY, this.ellipseGrow, this.ellipseGrow);
    this.moveX = map(this.x / this.travel, 0, 1, 0, width) 
    this.moveY = map(this.y / this.travel, 0, 1, 0, height) 

  }
}

const stars = new Array(6000)

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  for (let i = 0; i < stars.length; i++) {
    stars[i] = new Star()
  }
}

function draw() {
  background(0);
  translate(width / 2, height / 2)
  for (let i = 0; i < stars.length; i++) {
    stars[i].warp()
    stars[i].show()
  }
}