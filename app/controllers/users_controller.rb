class UsersController < ApplicationController

  def update
    @user = User.find(params[:id])
    @user.update_attributes(params.fetch(:user, {}).permit(:api_key))
    render :status => 200, :json => {:status => "success", :user => @user, :message => "The user has been updated"}
  end

end