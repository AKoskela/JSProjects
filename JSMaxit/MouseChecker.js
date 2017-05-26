function mouseChecker() {

  if (playerTurn == 0) {
    setXMark();
    tileChanger();
    playerTurn++;
  } else if (playerTurn == 1) {
    setXMark();
    tileChanger();
    playerTurn++;
  } else if (playerTurn % 2 == 0) {
    if (checkTileEven()) {
      refreshXMark();
      tileChanger();
      playerTurn++;
    }
  } else if (playerTurn % 2 == 1) {
    if (checkTileOdd()) {
      refreshXMark();
      tileChanger();
      playerTurn++;
    }
  } else {
    console.log("MouseChecker() error");
  }
}