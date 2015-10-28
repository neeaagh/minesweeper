function createBoard(width, height, mines) {
	var board = {};
	board.rows = [];
	board.width = width;
	board.height = height;
	board.mines = mines;
	for(var i = 0; i < height; i++) {
		board.rows[i] = [];
		for(var j = 0; j < width; j++) {
			var cell = {};
			cell.isRevealed = false;
			cell.content = 'empty';
			board.rows[i].push(cell);
		}
	}
	placeMines(board);
	placeNumbers(board);
	return board;
}

function placeMines(board) {
	for (var i = 0; i < board.mines; i++) {
		var row = Math.round(Math.random() * (board.width - 1));
	    var column = Math.round(Math.random() * (board.height - 1));
	    var cell = board.rows[row][column];
	    cell.content = 'mine';
	};
}

function placeNumbers(board) {
	console.log(board);
	for (var i = 0; i < board.height; i++) {
		for(var j = 0; j < board.width; j++) {
			var cell = board.rows[i][j];
			if (cell.content != 'mine') {
				cell.content = 'egg';
			}
			
		}
	};
}

angular.module('minesweeper', [])
.controller('MinesweeperController', function($scope) {
    $scope.board = createBoard(10, 10, 10);
});