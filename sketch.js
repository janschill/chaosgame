var a, b, c, s, x, y, num, clicked;

function setup()
{
  frameRate(30);
  x = 500;
  y = 500;
  noStroke();
  createCanvas(x, y);
  resetSketch();
}

function draw()
{
  fill(51);
  textSize(20);
  if (clicked)
  {
    ellipse(a.x, a.y,2,2);
    ellipse(b.x, b.y,2,2);
    ellipse(c.x, c.y,2,2);
    ellipse(s.x, s.y,2,2);

    var rand = getRandomInt(1, 3);
    var randTri = getRandomInt(1, 2);

    drawPoints(rand);
  }
}

function mousePressed()
{
  clicked = true;
  s.x = mouseX;
  s.y = mouseY;
  ellipse(s.x, s.y,2,2);
}

function getRandomInt(min, max)
{
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function drawPoints(rand)
{
  if (rand == 1)
  {
    s.x = half(a.x, s.x);
    s.y = half(a.y, s.y);
  }
  else if (rand == 2)
  {
    s.x = half(b.x, s.x);
    s.y = half(b.y, s.y);
  }
  else if (rand == 3)
  {
    s.x = half(c.x, s.x);
    s.y = half(c.y, s.y);
  }
  return ellipse(s.x, s.y,2,2);
}


function half(a, b)
{
  return (a + b) / 2;
}

function resetSketch()
{
  clicked = false;
  background(200);

  a = createVector(x * 0.5, y * 0.1);
  b = createVector(x * 0.15, y * 0.9);
  c = createVector(x * 0.85, y * 0.9);
  s = createVector(x * 0.5, y * 0.5);
}
