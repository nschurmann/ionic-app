angular.module('starter.controllers', [])

.controller('TodosCtrl', function ($scope, Todos) {
  $scope.Todos = Todos
})

.controller('AccountCtrl', function ($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
