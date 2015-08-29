Rails.application.routes.draw do

  put 'users/:id' => 'users#update'
  put 'users/update_wanikani/:id' => 'users#wanikani_info_update'
  get 'review/:id' => 'reviews#get_reviews'
  put 'review/:id' => 'reviews#set_reviews'

  devise_for :users
  root 'angular#angular'

end
