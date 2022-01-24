export class Board {
  width;
  height;
  board = "";

  constructor(width, height) {
    this.width = width;
    this.height = height;
    this.initializeBoard();
  }

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

  drop(block) {
    //this.board.
    //this.board = `.${block.toString()}.\n...\n...\n`;
    this.board = `.${block}.\n...\n...\n`;
  }
}
