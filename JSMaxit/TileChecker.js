function checkTileEven() {
  
  if((xT + 1 == pEx && yT == pEy) || (xT - 1 == pEx && yT == pEy) || (yT + 1 == pEy && xT == pEx) || (yT - 1 == pEy && xT == pEx)) {
    return true;
  }
 return false;
}

function checkTileOdd() {
  if((xT + 1 == pOx && yT == pOy) || (xT - 1 == pOx && yT == pOy) || (yT + 1 == pOy && xT == pOx) || (yT - 1 == pOy && xT == pOx)) {
    return true;
  }
  return false;
}

function rockCheck() {
  if (row[xT][yT].rock == true) {
    console.log("ROCK AHEAD AT" + " " + xT + " " + yT);
    return false;
  } else {
    return true;
  }
}

function playerCheck() {
  if (row[xT][yT].player == 0) {
    return true;
  } else {
    return false;
  }
}

function checkApple() {
  //Return 0 for black space
  //Return 1 for green apple
  //Return -1 for rotten apple
  
  if (row[xT][yT].apple == 1) {
    return -1;
  } else if ((1 < row[xT][yT].apples) || (row[xT][yT].apple < 3)) {
    return 1;
  } else {
    return 0;
  }
}