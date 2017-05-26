function drawTile() {
  for (var i = 0; i < xWidth; i++) {
    for (var j = 0; j < yLength; j++) {
      if (row[i][j].rock == false) {

        if (row[i][j].apple == 1) {
          //Rotten Apples
          fill(144, 82, 20);
          rect(i * tileSize, j * tileSize, tileSize, tileSize);
        } else if ((1 < row[i][j].apples) || (row[i][j].apple < 3)) {
          //Green Apples
          //console.log("Apple at " + i + " " + j);
          fill(0, 255, 0);
          rect(i * tileSize, j * tileSize, tileSize, tileSize);
        } else {
          //Regular Space
          fill(255);
          rect(i * tileSize, j * tileSize, tileSize, tileSize);
        }
      } else {
        fill(0);
        rect(i * tileSize, j * tileSize, tileSize, tileSize);
      }
    }
  }
}

//function drawRock() {
//  for (var i = 0; i < xWidth; i++) {
//    for (var j = 0; j < yLength; j++) {
//      if (row[i][j] = true) {
//        fill(0);
//        rect(i * 20, j * 20, 20, 20);
//      }
//    }
//  }
//}

function drawPlayer() {
  for (var i = 0; i < xWidth; i++) {
    for (var j = 0; j < yLength; j++) {
      if (row[i][j].player == 2) {
        fill(0, 0, 255);
        rect(i * tileSize, j * tileSize, tileSize, tileSize);
      }
      if (row[i][j].player == 1) {
        fill(255, 0, 0);
        rect(i * tileSize, j * tileSize, tileSize, tileSize);
      }
    }
  }
}

function drawPiece() {
  for (var i = 0; i < xWidth; i++) {
    for (var j = 0; j < yLength; j++) {
      if (row[i][j].value == 1) {
        image(xMark, i * tileSize, j * tileSize, tileSize, tileSize);
      }
    }
  }
}