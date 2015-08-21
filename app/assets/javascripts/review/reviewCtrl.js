app.controller('ReviewCtrl', [
  '$scope',
   'Auth',
   'Review',
   function($scope, Auth, Review){

    $scope.user;
    $scope.review_words;
    $scope.chosen_word;

    Auth.currentUser().then(function (user){
      $scope.user = user;

      Review.get_review({id: $scope.user.id},function(value){
        $scope.review_words = value;
        $scope.chosen_word = $scope.review_words[Math.floor(Math.random()*$scope.review_words.length)];
      });

    });

    $scope.submitReview = function(){
      if($scope.chosen_word.character == $scope.user_input){
        alert("YAY!");
      }
      else {
        alert("no... " + $scope.user_input + " is not " + $scope.chosen_word.character);
      }
      $scope.user_input = "";
    };
    
   }
]);