export class Board {
  width;
  height;
  board = "";
  testBoard = [];
  isFalling = false;
  block;
  fallingBlockRow = 0;

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
    //return this.testBoard.join("").toString();
    return this.board;
  }


  // Returns true if there is a falling block
  hasFalling() {
    return this.isFalling;
  }


  // Checks if 
  hasFallingAtRow() {
    for (let row = 0; row < this.height; row++) {
      for (let col = 0; col < this.width; col++) {
        return this.hasFalling() && row == this.fallingBlockRow && col == 1;
      }
    }
  }


  /* Drops the given block starting from the middle position of the board */
  drop(block) {
    this.block = block;
    this.board = `.${this.block}.\n...\n...\n`;
    //this.testBoard[0] = `.${block}.\n`;
    this.isFalling = true;
    this.fallingBlockRow++;
  }


  /* Moves the block one level downwards */
  tick() {
    /* let tmp = this.testBoard[1];
    this.testBoard[1] = this.testBoard[0];
    this.testBoard[0] = tmp; */


    //this.board = `...\n.${this.block}.\n...\n`;

    this.board = "";

    for (let row = 0; row < this.width; row++) {
        for (let  col = 0; col < this.height; col++) {
        if (col == this.fallingBlockRow && row == this.fallingBlockRow) {
          this.board = this.board.concat("X");
        } else {
          this.board = this.board.concat(".");
        }
      }
      this.board = this.board.concat("\n");
    }
    this.fallingBlockRow++;
  }
}


