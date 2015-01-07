angular.module('tictactoe',['TicTacToe.Game'])
.controller('TicTacToeController',function($scope, gridSize, Game){
  $scope.data = {
    grid : new Array(gridSize),
    getStatusMessage : Game.getStatusMessage,
    markSquare : function(row,col){
      Game.markSquare(row,col);
      //console.log(Game.getGame()," should be defined.");
      // console.log("This is row: ",row);
      // console.log("This is col: ",col);
    },
    isThreeInARow : Game.isThreeInARow,
    // isThreeInARow : function(){
    //  return Game.isThreeInARow();   
    // },
    // startGame: function(){
    //   console.log('from controller');
    //   Game.startGame();
    // }
    getSquare: function(row, col){
      // console.log(row, col, " Should be grid values");
      // var x = Game.getSquare(row, col);
      // console.log(x, " Should be a value");
      // var result="";

      // console.dir(Game);
      // if(game){
      //   console.log("Game does exist");
      //   result = Game.getSquare(row, col);
      //   console.log(result, " is the valu");
      // }else{
      //   // console.log("game doesn't exist");
      // }
      // return result;
      //console.log(Game.getGame()," game value");
      if(Game.getGame() === null){
        result = "";
      }else{
        result = Game.getSquare(row,col);
        //console.log("get square value ",result);
      }

     // var result = Game.getGame() ? Game.getSquare(row,col) : "";
       //console.log("Row :", row," Col :",col," result :", result);
      return result;
      // console.log("should show up 9 times");

    },

    startGame: function(){ 
      debugger;
      var game = new Game.game(gridSize);
      game.board.createBoard();
    },
    getCurrentPlayer: function(){
      return Game.getCurrentPlayer();
    }
  };
 });