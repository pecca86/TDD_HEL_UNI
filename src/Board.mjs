export class Board {
  width;
  height;
  board = "";

  constructor(width, height) {
    this.width = width;
    this.height = height;
    this.initializeBoard();
  }


  /* Initializes an empty board */
  initializeBoard() {
    for (let i = 0; i < this.height; i++) {
      this.board = this.board.concat(".".repeat(this.width)+"\n");
    }
  }


  /*
  String representation of the board
  */
  toString() {
    return this.board;
  }

  /* Drops the given block starting from the middle position of the board */
  drop(block) {
    this.board = `.${block}.\n...\n...\n`;
  }

  
  /* Moves the block one level downwards */
  tick() {
    this.board = "...\n.X.\n...\n";
  }
}


