class ReviewsController < ApplicationController

  def get_reviews
    @user = User.find(params[:id])

    review_words = random_select(@user.wanikani_vocab, 5) #returns 5 random elements

    render :status => 200, :json => {:status => "success", review_words => review_words}
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