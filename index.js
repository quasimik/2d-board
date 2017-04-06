function Board(x, y) {
  if (arguments.length !== 2) {
    throw new Error("Board::Must supply two numbers as parameters.")
  }
  if (typeof x !== "number" || x !== x) {
    throw new TypeError("Board()::parameter 1 must be a number.");
  }
  if (typeof y !== "number" || y !== y) {
    throw new TypeError("Board()::parameter 2 must be a number.");
  }
  this._x = x;
  this._y = y;
  return this;
}

Board.prototype.x = function() {
  return this._x;
};

Board.prototype.y = function() {
  return this._y;
};

exports.print = function createBoard() {
  return new Board(x, y);
}