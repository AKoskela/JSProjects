var xCord, yCord;
var xPos, yPos, hypo;
var fr = 3;

function setup() {

  createCanvas(800, 500);
  //noLoop();
}

function draw() {
  translate(400, 0);

  frameRate(fr);

  xCord = pmouseX - 400;
  yCord = pmouseY;

  hypo = sqrt(pow(xCord, 2) + pow(yCord, 2));

  stroke(225);
  background(0);

  noFill();
  ellipse(0, 0, 750, 750);

  lightning(375, 10);
  lightning(375, 10);

}

function mousePressed() {
  if (mousePressed() ) {
    redraw();
  }
}

function lightning(h, count) {

  var ln = h*.5;

  rotate(random(-PI/8, PI/8));

  line(0, 0, 0, ln);

  if (count > 0) {
    count--;
    push();
    translate(0, ln);
    rotate(random(-PI/8, PI/8));
    var temp = random(0, count);
    //if (temp > 8) {
    //  push();
    //  translate(0, ln);
    //  rotate(random(-PI/8, PI/8));
    //  lightning(h-ln, 3);
    //  pop();
    //}
    lightning(h-ln, count);
    pop();
  }
}