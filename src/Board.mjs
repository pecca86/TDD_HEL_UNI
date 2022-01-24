export class Board {
  width;
  height;
  board = "";
  testBoard = [];

  constructor(width, height) {
    this.width = width;
    this.height = height;
    this.initializeBoard();
  }


  /* Initializes an empty board */
  initializeBoard() {
    let row = new Array(".".repeat(this.width) + "\n");

    for (let i = 0; i < this.height; i++) {
      this.testBoard.push(row);
    }

    for (let i = 0; i < this.height; i++) {
      this.board = this.board.concat(".".repeat(this.width) + "\n");
    }
  }


  /*
  String representation of the board
  */
  toString() {
    /* let strrep = "";
    this.testBoard.forEach(item => strrep = strrep.concat(...item))
    return strrep; */
    return this.testBoard.join("").toString();
    //return this.board;
  }

  /* Drops the given block starting from the middle position of the board */
  drop(block) {
    //this.board = `.${block}.\n...\n...\n`;
    this.testBoard[0] = ".X.\n";
  }


  /* Moves the block one level downwards */
  tick() {
    this.board = "...\n.X.\n...\n";
  }
}


