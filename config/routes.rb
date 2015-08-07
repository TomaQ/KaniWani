Rails.application.routes.draw do

  put 'users/:id' => 'users#update'
  put 'users/update_wanikani/:id' => 'users#wanikani_info_update'

  devise_for :users
  root 'angular#angular'

end
