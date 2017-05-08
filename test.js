var createNewBoard = require("./index.js");

var board1 = createNewBoard(3, 4);
var board2 = createNewBoard(4, 3);
board1.setoob("OOB_NEXT");

board1.row(0, [00, 10, 20, 30, 40]);
board1.row(1, [01, 11, 21, 31, 41]);
board1.row(2, [02, 12, 22, 32, 42]);
board1.row(3, [03, 13, 32, 33, 43]);

board2.rows([
  [, 'A', , 'B'],
  ['C', , 'D', ],
  [, 'E', , 'F'],
  ['G', , 'H', ]
]);
// board1.col(2, ['A', 'B', 'C']);
console.log(board1.cols());
console.log(board2.cols());
board1.cols(board2.cols());
console.log(board1.cols());
