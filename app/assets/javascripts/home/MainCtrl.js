app.controller('MainCtrl', [
  '$scope', 
  'Auth',
  '$timeout',
  function($scope, Auth, $timeout){

    $scope.signedIn = Auth.isAuthenticated;
    $scope.user = {};
    $scope.username = '';

    Auth.currentUser().then(function (user){
      $scope.user = user;
    });

    var get_username = function() {
      var info;
      try{
        info = JSON.parse($scope.user.wanikani_user_info);
      }catch(e){
        alert(e);
      }
      alert(info['username']);
      return info['username'];
    };

    $scope.username = $timeout(function(){ 
      get_username();
      }, 50000);

  }
]);
