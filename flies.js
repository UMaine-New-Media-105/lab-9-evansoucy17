let flies = [];

function setup() {
  createCanvas(400, 400);
  for (let i = 0; i < 50; i++) {
    flies[i] = new Fly(
      random(width),
      random(height),
      random(1, 10),
      random(1, 10),
      0.2
    );
  }
}

function draw() {
  background(220);
  for (let i = 0; i < 50; i++) {
    flies[i].update();
    flies[i].display();
  }
}

class Fly {
  constructor(x, y, xSpeed, ySpeed, size) {
    this.x = x;
    this.y = y;
    this.xSpeed = xSpeed;
    this.ySpeed = ySpeed;
    this.size = size;
  }

  update() {
    this.x += this.xSpeed;
    this.y += this.ySpeed;

    if (this.x < this.size / 2 || this.x > width - 20) {
      this.xSpeed = -this.xSpeed;
    }

    if (this.y < this.size / 2 || this.y > height - 20) {
      this.ySpeed = -this.ySpeed;
    }
  }

  display() {
    push();
    translate(this.x, this.y);
    scale(this.size);
    strokeWeight(5);
    fill("grey");
    ellipse(100, 100, 50, 50);
    fill("white");
    ellipse(65, 80, 50, 25);
    ellipse(135, 80, 50, 25);
    strokeWeight(1);
    ellipse(112.5, 100, 17.5, 17.5);
    ellipse(90, 100, 17.5, 17.5);
    fill("black");
    ellipse(112.5, 100, 12.5, 12.5);
    ellipse(90, 100, 12.5, 12.5);
    strokeWeight(5);
    line(75, 100, 50, 110);
    line(75, 110, 50, 125);
    line(125, 100, 150, 110);
    line(125, 110, 150, 125);
    pop();
  }
}
