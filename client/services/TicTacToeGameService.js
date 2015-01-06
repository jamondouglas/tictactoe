angular.module('TicTacToe.Game',['TicTacToe.Board'])
.factory('Game',function(gridSize, Board, Player){
  var game = null;

  var Game = function(Board){
    this.board = Board;
    this.grid = Board.grid;
    // this.board = Board.board;
    this.humanPlayer = null;
    this.symbols = Board.symbols;
    this.computerPlayer = null;
    this.winner = null;
    this.tie = null;
    this.winningCombo = null;
    this.statusMessage = '';
  }
  // Game.prototype.startGame = function(){
  //     var game = new Game();
  // };

  var startGame = function(){
   game = new Game(new Board(new Player('O'), new Player('X')));
   // game.grid = new Board().grid;
   game.board.currentPlayer = game.board.humanPlayer;
   game.board.populateCombos();
   // console.log(game, " should be defined");
  };

  var switchCurrentPlayer = function(){
    this.board.switchCurrentPlayer(this.board.currentPlayer);
  };

  var markSquare = function(row, column){
    debugger;
  // console.dir(game.board.getSquare(index)," Should be index blank");  
    var index = row * gridSize + column;
    if(game.board.getSquare(index) === "" && game.board.winningCombo.length !== gridSize){
      // console.log("*******MARK SPOT*********");
      game.board.markSquare(index);
      game.board.switchCurrentPlayer();
      if(game.board.winner === game.board.humanPlayer){
        debugger;
        setStatusMessage("O has won.")
        //print status message that O has won.
      }
      console.log(game," Game object");
      if(!game.board.winner && !game.board.isFull()){
        //game.board.switchCurrentPlayer();
        // game.board.switchCurrentPlayer();
        // game.board.currentPlayer = 
        //    game.board.currentPlayer === game.board.humanPlayer ? 
        //    game.board.computerPlayer : game.board.humanPlayer;
        if(game.board.currentPlayer == game.board.computerPlayer){
          var x = game.board.computerMove(0,-1,-100,100, game.board.totalPlays)[1];
          game.board.markSquare(x);
          game.board.switchCurrentPlayer();
          // game.board.currentPlayer = 
          // game.board.currentPlayer === game.board.humanPlayer ? 
          // game.board.computerPlayer : game.board.humanPlayer;
          if(game.board.winner === game.board.computerPlayer){
            debugger;
            setStatusMessage("X has won");
          }
        }
      }else{
        debugger;
        //call to color boxes and letters and display winner
        //call status message for tie.
        if(game.board.isFull()){
          setStatusMessage('Draw.');
        }
      }
    }
    // console.log(game.board, " value of board");
    // console.log(row, column, "Square to be marked.");
  }
  var getGame = function(){
    // console.log("Value of game ", game);
    return game;
  }
  var getSquare = function(row, column){
    // console.log("in service getSquare");
    var index = row * gridSize + column;
    // var symbol = game.board.board[index];
    // console.log(game.board);
    // console.log(game.board.symbols[symbol], " from service");
    // console.log( "For index ",index, " Should be a value from service", game.board.getSquare(index));
    return game.board.getSquare(index);
    //return game.board.getSquare(index);
    // console.log(row, column);
  };

  var setStatusMessage = function(msg){
    game.statusMessage = msg;
  };

  var getStatusMessage = function(){
    return game.statusMessage;
  };

  var getCurrentPlayer = function(){
    // console.log(game," Game object");
    return game.board.currentPlayer.symbol+' to move';
  };

  var isThreeInARow = function(row, column){
    //console.log("three in a row");
    if(game){
     return game.board.isThreeInARow(row,column);
    }
    return '';
  };

  //return Game;
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
