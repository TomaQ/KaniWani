app.controller('UserCtrl', [
  '$scope',
   'Auth',
   '$http',
   'User',
   '$resource',
   function($scope, Auth, $http, User, $resource){

    Auth.currentUser().then(function (user){
      $scope.user = user;
    });

    $scope.update = function(){
      User.update({id: $scope.user.id},{api_key: $scope.api_key},function(){
      }, function(error) {
        console.log(error)
      });
    };

    $scope.updateWaniKaniInfo = function(){
      alert('update?');
    };

    $scope.updateApiKey = function(current_user){
      /*return $http.put({
        method: 'PUT',
        url: '/users/' + current_user.id + '.json',
        data: {"current_user.api_key": $scope.api_key}
      });*/
    };

   }
]);