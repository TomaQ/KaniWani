var app = angular.module('KaniWani', ['ui.router', 'templates', 'Devise', 'ngResource'])

app.config([
  '$stateProvider',
  '$urlRouterProvider',
  function($stateProvider, $urlRouterProvider){

    $stateProvider.state('home', {
      url: '/home',
      templateUrl: 'assets/home/_home.html',
      controller: 'MainCtrl'
    });

    $stateProvider.state('user', {
      url: '/user',
      templateUrl: 'assets/user/_user.html',
      controller: 'UserCtrl'
    });

    $stateProvider.state('review', {
      url: '/review',
      templateUrl: 'assets/review/_review.html',
      controller: 'ReviewCtrl'
    });

    $stateProvider.state('login', {
      url: '/login',
      templateUrl: 'assets/auth/_login.html',
      controller: 'AuthCtrl',
      onEnter: ['$state', 'Auth', function($state, Auth) {
        Auth.currentUser().then(function (){
          $state.go('home');
        })
      }]
    });

    $stateProvider.state('register', {
      url: '/register',
      templateUrl: 'assets/auth/_register.html',
      controller: 'AuthCtrl',
      onEnter: ['$state', 'Auth', function($state, Auth) {
        Auth.currentUser().then(function (){
          $state.go('home');
        })
      }]
    });

    $urlRouterProvider.otherwise('home');
  }
]);