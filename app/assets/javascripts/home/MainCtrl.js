app.controller('MainCtrl', [
  '$scope', 
  'Auth',
  function($scope, Auth){

    $scope.signedIn = Auth.isAuthenticated;

    Auth.currentUser().then(function (user){
      $scope.user = user;
    });

  }
]);