class UsersController < ApplicationController

  def update
    @user = User.find(params[:id])
    @user.update_attributes(params.fetch(:user, {}).permit(:api_key))
    
    render :status => 200, :json => {:status => "success", :user => @user, :message => "The user has been updated"}
  end

  def wanikani_info_update
    @user = User.find(params[:id])

    response = HTTParty.get("https://www.wanikani.com/api/v1.4/user/#{@user.api_key}/vocabulary")
    hash = JSON.parse response.to_json, symbolize_names: true
    @user.update_attribute(:wanikani_user_info, hash[:user_information])
    @user.update_attribute(:wanikani_vocab, hash[:requested_information])

    render :status => 200, :json => {:status => "success", :user => @user, :message => "The user has been updated"}
  end

end