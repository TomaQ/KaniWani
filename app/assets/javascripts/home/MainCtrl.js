app.controller('MainCtrl', [
  '$scope', 
  'Auth',
  '$timeout',
  function($scope, Auth, $timeout){

    $scope.signedIn = Auth.isAuthenticated;

    Auth.currentUser().then(function (user){
      $scope.user = user;
    });

  }
]);
