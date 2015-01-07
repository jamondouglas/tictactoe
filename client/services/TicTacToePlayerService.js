angular.module('TicTacToe.Player',[])
.factory('Player', function(){

  var Player = function(symbol){
    this._data = {
      symbol : symbol,
      score : 0
    };
  };

  Player.prototype = {
    set : function(key, value){
      return this._data[key] = value;
    },
    get : function(key){
      this._data[key];
    }
  };

  return Player;
});