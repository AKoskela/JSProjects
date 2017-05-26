//Setup of board parameters
var xWidth = 15;
var yLength = 10;
var tileSize = 20;
var playerTurn = 0;

//Position of tile clicked on board
var xT;
var yT;
var xP;
var yP;

//Pointer to more previous position of markers
var pEx;
var pEy;
var pOx;
var pOy;

var ePScore = 0;
var oPScore = 0;

var xMark;

//2D for board
var row;

function setup() {
  createCanvas(displayWidth, displayHeight);
  preload(); 

  //Creation of 2D board
  row = new Array(xWidth);
  for (var i = 0; i < xWidth; i++) {
    row[i] = [];
    for (var j = 0; j < yLength; j++) {

      var temp = (Math.random() * 100);
      var apples = (Math.random() * 15);

      if (temp < 20) { 
        row[i][j] = new Tile(0, true, 0, apples);
      } else {
        row[i][j] = new Tile(0, false, 0, apples);
      }
    }
  }
}

function preload() {
  xMark = loadImage("assets/xMark.png");
}

function draw() {

  translate(width/4, height/4);
  background(255);

  drawTile();
  drawPlayer();
  drawPiece();

  fill(191, 255, 3);
  rect(width * .4, height * .1, 200, 100);
  fill(0);
  textSize(24);
  text("Red Player " + oPScore, (width * .4) + 10, (height * .1) + 30);
  text("Blue Player " + ePScore, (width * .4) + 10, (height * .1) + 50);
}

function mousePressed() {

  xP = mouseX - (width/4);
  yP = mouseY - (height/4);

  //Sets position of tile clicked
  xT = Math.floor(xP/tileSize);
  yT = Math.floor(yP/tileSize);

  //Checkers to prove if tile is legal
  if (mousePressed) {
    if (rockCheck()) {
      if (playerCheck()) {
        mouseChecker();
      }
    }
  }
}

//Tile object
function Tile(pl, rk, val, app) {
  this.player = pl;
  this.rock = Math.floor(rk);
  this.value = val;
  this.apple = Math.floor(app);
}

function refreshXMark() {
  if (playerTurn % 2 == 0) {
    row[pEx][pEy].value = 0;
    pEx = xT;
    pEy = yT;
  } else {
    row[pOx][pOy].value = 0;
    pOx = xT;
    pOy = yT;
  }
  row[xT][yT].value = 1;
}

function setXMark() {
  if (playerTurn % 2 == 0) {
    pEx = xT;
    pEy = yT;
  } else {
    pOx = xT;
    pOy = yT;
  }
  row[xT][yT].value = 1;
}