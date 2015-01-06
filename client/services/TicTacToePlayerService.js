angular.module('TicTacToe.Player',[])
.factory('Player', function(){

  var Player = function(symbol){
    this.symbol = symbol;
    this.plays = 0;
  }

  return Player;
});