angular.module('TicTacToe.Board',[])
.factory('Board',function(gridSize){
  // var board;
  var Board = function(gridSize){
    this._data = {
      size : gridSize * gridSize,
      grid : null,
      turns: gridSize * gridSize,
      isValid : true
    };
  };

  Board.prototype = {
    placePiece : function(){

    },
    hasWon : function(){

    },
    createBoard : function(){
      this.set('grid',new Array(this.get('size')));
      //return new Array(this.get('size'));
    },
    resetBoard : function(){

    },
    convertIndexToRow : function(index){
      return index/ this.get('size');
    },
    convertIndexToColumn : function(index){
      return index % this.get('size');
    },
    convertRowColumnToIndex : function(row, column){
      return row * this.get('size') + column;
    },
    get : function(key){
      return this._data[key];
    },
    set : function(key, value){
      this._data[key] = value;
    }
  };
  return {
    board : Board
  }
  // var Board = function(humanPlayer, computerPlayer, gridSize) {
  //   this.grid  =  new Array(gridSize);
  //   //console.log("Grid size should be 3 ", this.grid);
  //   this.board = [];
  //   this.humanPlayer = humanPlayer;
  //   this.computerPlayer = computerPlayer;
  //   this.currentPlayer = '';
  //   this.totalPlays = 0;
  //   this.X = -1;
  //   this.O = 1;
  //   this.symbols = ['O','X'];
  //   this.winningCombo = [];
  //   this.winningCombos = [];
  //   this.winner = null;
  //   this.threeInARow = 'bold red';
  //   // winningCombos : ,
  //   // winningCombo :
  // };

  Board.prototype.switchCurrentPlayer = function(){
    // console.log("This is the current Player", this.currentPlayer);
    this.currentPlayer = this.currentPlayer === this.humanPlayer ? this.computerPlayer: this.humanPlayer;
  };

  Board.prototype.markSquare = function(index){
    //debugger;
    // console.log("This is the current Player: ", this.currentPlayer);
    this.currentPlayer.plays++;
    this.totalPlays = this.humanPlayer.plays + this.computerPlayer.plays
    // this.board[index] = this.symbols.indexOf(this.currentPlayer.symbol);
    this.board[index] = this.currentPlayer.symbol === 'X' ? this.X : this.O;
    if(this.currentPlayer.plays >= gridSize){
      var winner = this.isWinner();
      if(winner){
        this.winner = winner === this.X ? this.computerPlayer : this.humanPlayer;
      }
      // this.checkRows();
      // this.checkColumns();
      // this.checkDiagonals();
      // this.checkMinorDiagonal();
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

  // Board.prototype.checkRows = function(){
  //   debugger;
  //   var row = 0;
  //   var col = 0;
  //   var sum;
  //   var currentGrid = null;
  //   while(row <= gridSize -1 ){
  //     // console.log(this.grid.length," should be 3 for grid");
  //     //need to check if sum is still 0 
  //     if(col > gridSize -1){
  //       if(sum === -gridSize && this.winningCombo.length === gridSize){
  //         console.log("Values for winningCombo: ", this.winningCombo);
  //         console.log('O winner');
  //         this.winner = this.currentPlayer;
  //         return;
  //       }else if(sum === gridSize){
  //         console.log('X winner');
  //         this.winner = this.currentPlayer;
  //         return;
  //       }
  //       col = 0;
  //       row++;
  //       sum -= sum;
  //       currentGrid = null;
  //       this.winningCombo = [];
  //       continue;
  //     }
  //     if(currentGrid !== null && currentGrid !== this.board[this.getIndex(row,col)]){
  //       sum -= sum;
  //       this.winningCombo = [];
  //       currentGrid = null;
  //       col = 0;
  //       row++;
  //       continue;
  //     }

  //     if(this.getSquare(this.getIndex(row, col)) === ''){
  //       row++;
  //       col = 0;
  //       sum -= sum;
  //       this.winningCombo = [];
  //       currentGrid = null;
  //       continue;
  //     }

  //     sum = sum || 0;
  //     sum += this.board[this.getIndex(row,col)];
  //     currentGrid = this.board[this.getIndex(row,col)];
  //     this.winningCombo.push([row,col]);
  //     col++;
  //   }
  // };

  // Board.prototype.checkColumns = function(){
  //   var row = 0;
  //   var col = 0;
  //   var currentGrid = null;
  //   var sum;
  //   while(col <= gridSize -1 && this.winningCombo.length !== gridSize ){

  //     if(row > gridSize -1){
  //       if(sum === -gridSize && this.winningCombo.length === gridSize){
  //         console.log("Values for winningCombo: ", this.winningCombo);
  //         console.log('O winner');
  //         this.winner = this.currentPlayer;
  //         return;
  //       }else if(sum === gridSize){
  //         this.winner = this.currentPlayer;
  //         console.log('X winner');
  //         return;
  //       }
  //       row = 0;
  //       col++;
  //       sum -= sum;
  //       this.winningCombo = [];
  //       continue;
  //     }
  //     if(currentGrid !== null && currentGrid !== this.board[this.getIndex(row,col)]){
  //       sum -= sum;
  //       this.winningCombo = [];
  //       currentGrid = null;
  //       row = 0;
  //       col++;
  //       continue;
  //     }


  //     if(this.getSquare(this.getIndex(row, col)) === ''){
  //       col++;
  //       row = 0;
  //       sum -= sum;
  //       this.winningCombo = [];
  //       currentGrid = null;
  //       continue;
  //     }

  //     sum = sum || 0;
  //     sum += this.board[this.getIndex(row,col)]; 
  //     currentGrid = this.board[this.getIndex(row,col)];
  //     this.winningCombo.push([row,col]);
  //     row++;
  //   }
  // };

  // Board.prototype.checkDiagonals = function(){
  //   //check row and column bot increasing by 1 until reaches gridSize
  //   var row = 0;
  //   var col = 0;
  //   var currentGrid = null;
  //   var sum;

  //   while (row <= gridSize -1 && col <= gridSize -1 && this.winningCombo.length !== gridSize ){
  //     //check for empty diagonal return out of loop

  //      if(currentGrid !== null && currentGrid !== this.board[this.getIndex(row,col)]){
  //       sum -= sum;
  //       this.winningCombo = [];
  //       break;
  //     }

  //     if(this.getSquare(this.getIndex(row,col)) == ''){
  //       this.winningCombo = [];
  //       break;
  //     }

  //     if(row === gridSize -1 && col === gridSize -1){
  //       sum = sum || 0;
  //       sum += this.board[this.getIndex(row,col)];
  //       this.winningCombo.push([row,col]);
  //       if(sum === -gridSize && this.winningCombo.length === gridSize){
  //         console.log("Values for winningCombo: ", this.winningCombo);
  //         this.winner = this.currentPlayer;
  //         console.log('O winner');
  //         return;
  //       }else if(sum === 3){
  //         this.winner = this.currentPlayer;
  //         console.log('X winner');
  //         return;
  //       }

  //       this.winningCombo = [];
  //       return;
  //     }
  //     //

  //     sum = sum || 0;
  //     sum += this.board[this.getIndex(row,col)];
  //     currentGrid = this.board[this.getIndex(row,col)];
  //     this.winningCombo.push([row,col]);
  //     row++;
  //     col++;
  //   }
  // };

  // Board.prototype.checkMinorDiagonal = function(){
  //   //check row and column subtracting row by 1 and adding 1 to column 
  //   var row = gridSize - 1;
  //   var col = 0;
  //   var currentGrid = null;
  //   var sum;

  //   while (row >= 0 && col <= gridSize -1 && this.winningCombo.length !== gridSize ){
  //     if(currentGrid !== null && currentGrid !== this.board[this.getIndex(row,col)]){
  //       sum -= sum;
  //       this.winningCombo = [];
  //       break;
  //     }

  //     if(this.getSquare(this.getIndex(row,col)) === ''){
  //       this.winningCombo = [];
  //       break;
  //     }

  //     if(row === 0 && col === gridSize -1){
  //       sum = sum || 0;
  //       sum += this.board[this.getIndex(row, col)];
  //       this.winningCombo.push([row,col]);
  //       if(sum === -gridSize && this.winningCombo.length === gridSize){
  //         console.log("Values for winningCombo: ", this.winningCombo);
  //         console.log('O winner');
  //         this.winner = this.currentPlayer;
  //         return;
  //       }else if(sum === gridSize){
  //         console.log('X winner');
  //         this.winner = this.currentPlayer;
  //         return;
  //       }
  //       this.winningCombo = [];
  //       return;
  //     }

  //     sum = sum || 0;
  //     sum += this.board[this.getIndex(row,col)];
  //     currentGrid = this.board[this.getIndex(row,col)];
  //     this.winningCombo.push([row,col]);
  //     row--;
  //     col++;
  //   }
  //   // until row === 0 and colu === gridsize
  // };

  Board.prototype.isThreeInARow = function(row,col){
    if(this.winningCombo.indexOf(this.getIndex(row, col)) !== -1){
      return this.threeInARow;
    }
    return '';
  };

  Board.prototype.isFull = function(){
    //debugger;
    var result = true;
    //return this.board.length === gridSize * gridSize ? true : false
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
    // return this.board[index] !== undefined ? this.symbols[this.board[index]] : '' ;
    // return this.board.symbols[this.board[index]];
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
  }

  //Create an object that holds winning combos DONE
  //Create a method that uses this object and returns a score for early wins
  Board.prototype.isWinner = function(depth){
    var index,x,o,counter;
    //debugger;
    for(combo in this.winningCombos){
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
        // console.log('X has won');
        this.winningCombo = this.winningCombos[combo];
        return this.X;
      }
      if(!o){
        // console.log('O has won');
        this.winningCombo = this.winningCombos[combo];
        return this.O;
      }
    }
  }

  Board.prototype.computerMove = function(depth, player, alpha, beta, totalPlays){
    //debugger;
    var index, score, bestMove, val;
    var intelligence = 1;
    var index = gridSize * gridSize;
    var playsRemaining = playsRemaining || (gridSize * gridSize) - totalPlays;
    // var numOfPlays = getPositions();
     //term case
     //if depth has been reached or game has been won
     //term case should exit only for win 
     //call a method that evals all row, col and both diagonals for three in a row
     //term case
    if(val = this.isWinner()){
      return val * player;
    }

    //if(intelligence > depth){
      while(index--){
        if(!this.board[index]){
          this.board[index] = player;
          if(player === 1){
              score = this.computerMove(depth +1,-player,alpha, beta);
              if(score > alpha){
                alpha = score;
                //bestMove = index;
            }
          }else {
            score = this.computerMove(depth+1, -player, alpha, beta, totalPlays++);
            if(score < beta){
              beta = score;
              bestMove = index;
            }
            //console.log('X play');
            //minimizer code
          }
          this.board[index] = '';
          if(alpha >= beta){
            break;
          }
        }
        // this.board[playRemaining] = !this.board[playsRemaining] ? player : this.board[playsRemaining];
      }
      //if ever reaches here tie
      if(player === 1){
        return alpha;
      }
      this.winningCombo = [];
      return [beta,bestMove];
    //}
  };

  // Board.prototype.createBoard = function(){
  //   return Board;
  // };
  // var board = function(){
  //   console.log("A board has been created.");
  // }
  //return Board;
});