angular.module('TicTacToe.Game',['TicTacToe.Board'])
.factory('Game',function(gridSize, Board, Player){
  var game = null;

  var Game = function(Board){
    this.board = Board;
    // this.board = Board.board;
    this.humanPlayer = null;
    this.symbols = Board.symbols;
    this.computerPlayer = null;
    this.statusMessage = '';
  }

  var startGame = function(){
   game = new Game(new Board(new Player('O'), new Player('X')));
   game.board.currentPlayer = game.board.humanPlayer;
   game.board.populateCombos();
  };

  var switchCurrentPlayer = function(){
    this.board.switchCurrentPlayer(this.board.currentPlayer);
  };

  var markSquare = function(row, column){
    var index = row * gridSize + column;
    if(game.board.getSquare(index) === "" && game.board.winningCombo.length !== gridSize){
      game.board.markSquare(index);
      game.board.switchCurrentPlayer();
      if(game.board.winner === game.board.humanPlayer){
        setStatusMessage("O has won.")
      }
      console.log(game," Game object");
      if(!game.board.winner && !game.board.isFull()){
        if(game.board.currentPlayer == game.board.computerPlayer){
          var x = game.board.computerMove(0,-1,-100,100, game.board.totalPlays)[1];
          game.board.markSquare(x);
          game.board.switchCurrentPlayer();
          if(game.board.winner === game.board.computerPlayer){
            setStatusMessage("X has won");
          }
        }
      }else{
        if(game.board.isFull()){
          setStatusMessage('Draw.');
        }
      }
    }
  };

  var getGame = function(){
    return game;
  };

  var getSquare = function(row, column){
    var index = row * gridSize + column;
    return game.board.getSquare(index);
  };

  var setStatusMessage = function(msg){
    game.statusMessage = msg;
  };

  var getStatusMessage = function(){
    return game.statusMessage;
  };

  var getCurrentPlayer = function(){
    return game.board.currentPlayer.symbol+' to move';
  };

  var isThreeInARow = function(row, column){
    if(game){
      return game.board.isThreeInARow(row,column);
    }
    return '';
  };

  return {
    getStatusMessage: getStatusMessage,
    getGame : getGame,
    startGame : startGame,
    markSquare : markSquare,
    getSquare : getSquare,
    getCurrentPlayer: getCurrentPlayer,
    isThreeInARow : isThreeInARow
  };
});
