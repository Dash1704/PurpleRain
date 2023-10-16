class Star {
  constructor() {
    this.x = random(width);
    this.y = (-100, -10);
    this.radius = random(1, 4);
    this.speed = random(1, 4)
    this.lineLength = random(5, 30)
  }
  fall() {
    this.y = this.y + this.speed
    if(this.y > height) {
      this.y = random(-200, -100);
    }
  }
  show() {
    stroke(255, 255, 255)
    ellipse(this.x, this.y, this.radius * 2);
    line(this.x, this.y, this.x, this.y + this.lineLength);
  }
}

const stars = new Array(1000)

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  for (let i = 0; i < stars.length; i++) {
    stars[i] = new Star()
  }
}

function draw() {
  background(0, 0, 0);
  for (let i = 0; i < stars.length; i++) {
    stars[i].fall()
    stars[i].show()
  }
}