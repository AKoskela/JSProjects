function tileChanger() {
  if (playerTurn % 2 == 1) {
    row[xT][yT].player = 2;
    if (checkApple() == - 1) {
      ePScore = ePScore - 2;
    } else if (checkApple() == 1) {
      ePScore = ePScore + 3;
    } else {
      ePScore++;
    }
  } else if (playerTurn % 2 == 0) {
    row[xT][yT].player = 1;
    if (checkApple() == - 1) {
      oPScore = oPScore - 2;
    } else if (checkApple() == 1) {
      oPScore = oPScore + 3;
    } else {
      oPScore++;
    }
  }
  console.log(ePScore + " " + oPScore);
}