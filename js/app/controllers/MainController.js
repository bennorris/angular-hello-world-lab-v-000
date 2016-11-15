function MainController($scope) {
  $scope.name = 'Pentti';
  $scope.email = 'pentti@gmail.com';
  $scope.phone = '+4516423421'
}

angular
  .module('app')
  .controller('MainController', MainController);
