app.controller('ReviewCtrl', [
  '$scope',
   'Auth',
   function($scope, Auth){

    $scope.user;

    Auth.currentUser().then(function (user){
      $scope.user = user;
    });

    $scope.submitReview = function(){
      alert($scope.user.username);
    };
    
   }
]);