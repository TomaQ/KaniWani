require 'json'

class ReviewsController < ApplicationController

  def get_reviews
    @user = User.find(params[:id])

    review = JSON.parse(@user.wanikani_vocab)
    review_words = random_select(review, 5) #returns 5 random elements

    render :status => 200, :json => review_words
  end

  def set_reviews
    puts params

    render :status => 200, :json => {:status => "success", :message => "The review has been sent"}
  end

  private

    def random_select(array, n)
      result = []
      n.times do 
        result << array[rand(array.length)]
      end
      result
    end

end
