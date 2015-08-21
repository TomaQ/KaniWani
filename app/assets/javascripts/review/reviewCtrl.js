app.controller('ReviewCtrl', [
  '$scope',
  'Auth',
  'Review',
  function($scope, Auth, Review){

    $scope.user;
    $scope.review_words;
    $scope.chosen_word;

    var correct_words = 0;
    var remaining_words; //words that are left in the review_set

    Auth.currentUser().then(function (user){
      $scope.user = user;

      Review.get_review({id: $scope.user.id},function(value){
        $scope.review_words = value;
        $scope.chosen_word = $scope.review_words[Math.floor(Math.random()*$scope.review_words.length)];
        remaining_words = $scope.review_words.slice(); //copies the array
      });

    });

    $scope.submitReview = function(){
      getReviewSet();
    };

    function getReviewSet(){

      if(checkWord($scope.chosen_word)){
        var index = remaining_words.indexOf($scope.chosen_word);
        remaining_words.splice(index, 1);
        correct_words += 1;
      }

      $scope.chosen_word = remaining_words[Math.floor(Math.random()*remaining_words.length)];
      
      if(correct_words == 5){ //5 for now
        alert("You're done!");
      }
    }

    function checkWord(word){
      if(word.character == $scope.user_input){
        alert("YAY!");
        $scope.user_input = "";
        return true;
      }
      else {
        alert("no... " + $scope.user_input + " is not " + $scope.chosen_word.character);
        $scope.user_input = "";
        return false;
      }
    }
    
  }
]);