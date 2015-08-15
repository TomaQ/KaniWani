class UsersController < ApplicationController

  def update
    @user = User.find(params[:id])
    @user.update_attributes(params.fetch(:user, {}).permit(:api_key))

    wanikani_info_update
  end

  def wanikani_info_update
    @user = User.find(params[:id])

    response = HTTParty.get("https://www.wanikani.com/api/v1.4/user/#{@user.api_key}/vocabulary")
    hash = JSON.parse response.to_json, symbolize_names: true

    @user.update_attribute(:username, hash[:user_information][:username])
    @user.update_attribute(:gravatar, hash[:user_information][:gravatar])
    @user.update_attribute(:wanikani_level, hash[:user_information][:level])
    @user.update_attribute(:wanikani_vocab, hash[:requested_information][:general])

    render :status => 200, :json => {:status => "success", :user => @user, :message => "The user has been updated"}
  end

end