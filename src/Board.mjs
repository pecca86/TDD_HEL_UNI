export class Board {
  width;
  height;
  board = "";
  testBoard = [];
  isFalling = false;
  block;
  fallingBlockRow;
  isInitialized = false;

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
    //let strrep = "";
    //this.testBoard.forEach(item => strrep = strrep.concat(...item))
    //return strrep;
    return this.testBoard.join("").toString();
    //return this.board;
  }


  // Returns true if there is a falling block
  hasFalling() {
    return this.isFalling;
  }


  // Checks if there is still a falling block at given row
  hasFallingAtRow() {
    for (let row = 0; row < this.height; row++) {
      for (let col = 0; col < this.width; col++) {
        return this.hasFalling() && row == this.fallingBlockRow && col == 1;
      }
    }
  }


  /* Drops the given block starting from the middle position of the board */
  drop(block) {
    // Check if there is already a block falling, if so throw error
    if (this.isFalling) {
      throw new Error("already falling");
    } else {
      this.fallingBlockRow = 0;
      this.isFalling = true;
      this.block = block;
      this.board = `.${this.block}.\n...\n...\n`;
      this.testBoard[0] = `.${block}.\n`;
      //this.fallingBlockRow++;
    }
  }



  // TODO: SAVE THE BOARD STATE!

  /* Moves the block one level downwards */
  tick() {

    if (this.isFalling) {
      // TODO: Check if row already consists of a previous block
      // Possible solution: height - 1 
/*       if (this.testBoard[this.fallingBlockRow] !== "...\n") {
        //return;
      } */

      let tmp = this.testBoard[this.fallingBlockRow+1];
      this.testBoard[this.fallingBlockRow+1] = this.testBoard[this.fallingBlockRow];
      this.testBoard[this.fallingBlockRow] = tmp;
      this.fallingBlockRow++;
      
      // Check if block reached to bottom
      // Reduce height by one, since this row is now occupied
      if (this.fallingBlockRow === this.height) {
        this.isFalling = false;
        this.height -= 1;
      }
    }




    // Check if there is still a block falling
    // If not, enable the block to tick down one row
    /* if (this.fallingBlockRow == this.height) {
      this.isFalling = false;
    } else {
      this.board = "";
      for (let row = 0; row < this.width; row++) {
        for (let col = 0; col < this.height; col++) {
          if (col == 1 && row == this.fallingBlockRow) {
            this.board = this.board.concat(this.block);
          } else {
            this.board = this.board.concat(".");
          }
        }
        this.board = this.board.concat("\n");
      }
      this.fallingBlockRow++;
    } */
  }
}


