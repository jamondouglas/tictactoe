angular.module('starter',[
'ui.bootstrap',
'ngRoute',
'tictactoe',
'TicTacToe.Game',
'TicTacToe.Board',
'TicTacToe.Player'
])
.constant('gridSize',3)
.config(function($routeProvider, $httpProvider){
$routeProvider
.when('/',{
templateUrl:'views/tictactoe.html',
controller:'TicTacToeController'
})
.otherwise({
redirectTo: '/'
});
});