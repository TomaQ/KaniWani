app.controller('MainCtrl', [
  '$scope', 
  'Auth',
  function($scope, Auth){

    $scope.signedIn = Auth.isAuthenticated;

    Auth.currentUser().then(function (user){
      $scope.user = user;
    });

    var get_username = function() {
      var info = angular.fromJson($scope.user.wanikani_user_info);
      return info['username'];
    };

    //$scope.username = get_username();

  }
]);