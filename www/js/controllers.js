angular.module('starter.controllers', [])

.controller('TodosCtrl', function ($scope, Todos) {
  $scope.Todos = Todos
})

.controller('TodoDetailCtrl', function ($scope, $state, $ionicHistory, Todos) {
  $scope.todo = Todos.get($state.params.id)
  $scope.Todos = Todos
  $scope.eliminar = function eliminar (todo) {
    $ionicHistory.goBack()
    Todos.remove(todo)
  }
})

.controller('AccountCtrl', function ($scope) {
  $scope.settings = {
    enableFriends: true
  };
})
