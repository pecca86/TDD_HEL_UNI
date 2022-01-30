export class Board {
  width;
  height;
  gameBoard = [];
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
    for (let i = 0; i < this.height; i++) {
      this.gameBoard.push(this.getEmptyRow());
    }
  }

  // Returns an empty row of the correct width as a String
  getEmptyRow() {
    let row = new Array(".".repeat(this.width) + "\n");
    return row;
  }


  /*
  String representation of the board
  */
  toString() {
    return this.gameBoard.join("").toString();
  }


  // Returns true if there is a falling block
  hasFalling() {
    return this.isFalling;
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
      // TODO: Refactor: Needs to check if there is an existing block at row 0
      this.setBlockToBoard(0, 0);
    }
  }

  // Puts the block into given row and column
  setBlockToBoard(row, col) {
    this.gameBoard[row] = `.${this.block}.\n`;
  }

  /* Moves the block one level downwards */
  tick() {
    if (this.isFalling) {
      this.descendBlockOneRow();
      this.checkIfBlockHitBottom();
    }
  }

  // Moves the current block down one row
  descendBlockOneRow() {
    let tmp = this.gameBoard[this.fallingBlockRow + 1];
    this.gameBoard[this.fallingBlockRow + 1] = this.gameBoard[this.fallingBlockRow];
    this.gameBoard[this.fallingBlockRow] = tmp;
    this.fallingBlockRow++;
  }

  // Check if block reached to bottom
  // Reduce height by one, since this row is now occupied
  checkIfBlockHitBottom() {
    if (this.fallingBlockRow === this.height) {
      this.isFalling = false;
      this.height -= 1;
    }
  }

}


