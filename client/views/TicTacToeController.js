angular.module('tictactoe',['TicTacToe.Game'])
.controller('TicTacToeController',function($scope, gridSize, Game){
  $scope.data = {
    grid : new Array(gridSize),
    getStatusMessage : Game.getStatusMessage,
    markSquare : function(row,col){
      Game.markSquare(row,col);
    },
    isThreeInARow : Game.isThreeInARow,
    getSquare: function(row, col){
      var result;
      if(Game.getGame() === null){
        result = '';
      }else{
        result = Game.getSquare(row,col);
      }

      return result;
    },

    startGame: function(){
      Game.startGame();
    },
    getCurrentPlayer: function(){
      return Game.getCurrentPlayer();
    }
  };
});