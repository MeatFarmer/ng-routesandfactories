myApp.controller('highfiveController', ['$scope', 'gameFactory', function( $scope, gameFactory){
  console.log('ng highfive');

  $scope.displayChar = function( index ){
    console.log('in displayChar, with', 'index');
  }// end displayChar
}]);
