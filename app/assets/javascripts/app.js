var app = angular.module('KaniWani', ['ui.router', 'templates'])

app.config([
  '$stateProvider',
  '$urlRouterProvider',
  function($stateProvider, $urlRouterProvider){

    $stateProvider.state('home', {
      url: '/home',
      templateUrl: 'assets/home/_home.html',
      controller: 'MainCtrl'
    })

    $urlRouterProvider.otherwise('home');
  }
]);