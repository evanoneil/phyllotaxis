var n = 100;
var c = 8;

function setup() {
  createCanvas(1400,800);
  angleMode(DEGREES);
  colorMode(HSB);
  background(0);

}

function draw() {

  var a = n * 137.5;
  var r = c * sqrt(n);
  
  var x = r * cos(a) + width/2;
  var y = r * sin(a) + height /2;
  
  fill(201,a%256,250);
  ellipse(x,y,8,8);
  noStroke();
  
  n++;
}
