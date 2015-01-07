angular.module('TicTacToe.Board',[])
.factory('Board',function(gridSize){

  var Board = function(humanPlayer, computerPlayer, gridSize) {
    this.grid  =  new Array(gridSize);
    this.board = [];
    this.humanPlayer = humanPlayer;
    this.computerPlayer = computerPlayer;
    this.currentPlayer = '';
    this.totalPlays = 0;
    this.X = -1;
    this.O = 1;
    this.symbols = ['O','X'];
    this.winningCombo = [];
    this.winningCombos = [];
    this.winner = null;
    this.threeInARow = 'bold red';
  };

  Board.prototype.switchCurrentPlayer = function(){
    this.currentPlayer = this.currentPlayer === this.humanPlayer ? this.computerPlayer: this.humanPlayer;
  };

  Board.prototype.markSquare = function(index){
    this.currentPlayer.plays++;
    this.totalPlays = this.humanPlayer.plays + this.computerPlayer.plays;
    this.board[index] = this.currentPlayer.symbol === 'X' ? this.X : this.O;
    if(this.currentPlayer.plays >= gridSize){
      var winner = this.isWinner();
      if(winner){
        this.winner = winner === this.X ? this.computerPlayer : this.humanPlayer;
      }
    }
  };
  Board.prototype.getIndex = function(row, column){
    return row * gridSize  + column;
  };

  Board.prototype.getRow = function(index){
    return Math.floor(index/this.grid.length);
  };

  Board.prototype.getColumn = function(index){
    return index % this.grid.length;
  };

  Board.prototype.isThreeInARow = function(row,col){
    if(this.winningCombo.indexOf(this.getIndex(row, col)) !== -1){
      return this.threeInARow;
    }
    return '';
  };

  Board.prototype.isFull = function(){
    var result = true;
    for(var i = 0; i < this.board.length; i++){
      if(typeof this.board[i] === 'string' || this.board.length !== gridSize * gridSize){
        return false;
      }
    }
    return result;
  };

  Board.prototype.getSquare = function(index){
    var result = '';
    if(this.board[index]){
      result = this.board[index] === this.X ? 'X': 'O';
    }
    return result;
  };
  Board.prototype.populateCombos = function(){
    for(var i = 0, majorDiagonal=[], minorDiagonal=[];i<gridSize; i++){
      for(var j = 0,row = [], col = []; j < gridSize;j++){
        row.push(i*gridSize + j);
        col.push(j*gridSize + i);
      }
      this.winningCombos.push(row,col);
      majorDiagonal.push( i * gridSize + i);
      minorDiagonal.push((gridSize -i -1) * gridSize + i);
    }
    this.winningCombos.push(majorDiagonal,minorDiagonal);
  };

  Board.prototype.isWinner = function(){
    var index,x,o,counter;
    for(var combo in this.winningCombos){
      counter = x = o = gridSize;
      while(counter--){
        index = this.winningCombos[combo][counter];

        if(this.board[index] > 0){
          o--;
        }
        if(this.board[index] < 0){
          x--;
        }
      }
      if(!x){
        this.winningCombo = this.winningCombos[combo];
        return this.X;
      }
      if(!o){
        this.winningCombo = this.winningCombos[combo];
        return this.O;
      }
    }
  };

  Board.prototype.computerMove = function(player, alpha, beta, totalPlays){
    var score, bestMove, val;
    var index = gridSize * gridSize;
    var playsRemaining = playsRemaining || (gridSize * gridSize) - totalPlays;
    if(val = this.isWinner()){
      return val * player;
    }

    while(index--){
      if(!this.board[index]){
        this.board[index] = player;
        if(player === 1){
          score = this.computerMove(-player,alpha, beta);
          if(score > alpha){
            alpha = score;
              //bestMove = index;
          }
        }else {
          score = this.computerMove(-player, alpha, beta, totalPlays++);
          if(score < beta){
            beta = score;
            bestMove = index;
          }
        }
        this.board[index] = '';
        if(alpha >= beta){
          break;
        }
      }
    }
    if(player === 1){
      return alpha;
    }
    this.winningCombo = [];
    return [beta,bestMove];
  };
  return Board;
});