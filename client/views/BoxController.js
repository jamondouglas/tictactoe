angular.module('starter.controller',[])
.controller('BoxController', function($scope){
  $scope.changeBoxValue = function(x){
    console.log($scope);
    if($scope.box.value == "-"){
      console.log("Here in changeBox");
      $scope.box.value = "X"; 
    }else if($scope.box.value == "X"){
      console.log("change x");
      $scope.box.value= "O";
    }else{
      $scope.box.value= "X";
      console.log("change to X")
    }
    // else if( $scope.x=="X"){
    //   $scope.x = "O";
    // }else{
    //   $scope.x="X";
    // }
  };
});