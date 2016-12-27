angular.module('starter', ['ionic', 'starter.controllers', 'starter.services'])
.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true)
      cordova.plugins.Keyboard.disableScroll(true)
    }
    if (window.StatusBar) {
      StatusBar.styleDefault()
    }
  })
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'templates/tabs.html'
  })

  .state('tab.todos', {
      url: '/todos',
      views: {
        'tab-todos': {
          templateUrl: 'templates/tab-todos.html',
          controller: 'TodosCtrl'
        }
      }
    })
  
  .state('tab.tododetail', {
      url: '/todos/:id',
      views: {
        'tab-todos': {
          templateUrl: 'templates/todos-detail.html',
          controller: 'TodoDetailCtrl',
        }
      }
    })

  .state('tab.account', {
    url: '/account',
    views: {
      'tab-account': {
        templateUrl: 'templates/tab-account.html',
        controller: 'AccountCtrl'
      }
    }
  });

  $urlRouterProvider.otherwise('/tab/todos');
})
