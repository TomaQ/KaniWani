app.controller('UserCtrl', [
  '$scope',
   'Auth',
   '$http',
   function($scope, Auth, $http){

    Auth.currentUser().then(function (user){
      $scope.user = user;
    });

    $scope.updateWaniKaniInfo = function(){
      alert('update?');
    };

    $scope.updateApiKey = function(current_user){
      return $http.put({
        method: 'PUT',
        url: '/users/' + current_user.id + '.json',
        data: {"current_user.api_key": $scope.api_key}
      });
    };

   }
]);