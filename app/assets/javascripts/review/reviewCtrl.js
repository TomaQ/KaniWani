app.controller('ReviewCtrl', [
  '$scope',
   'Auth',
   'Review',
   function($scope, Auth, Review){

    $scope.user;
    $scope.review_words; //= get_review_words();

    Auth.currentUser().then(function (user){
      $scope.user = user;

      Review.query({id: $scope.user.id},function(value){
        $scope.review_words = value;
      });

    });

    $scope.submitReview = function(){
      alert($scope.user.username);
    };

    /*get_review_words = function(){
      Review.get_review({id: $scope.user.id}, function(){
      }, function(error) {
        console.log(error)
      });
    };*/

    
    
   }
]);