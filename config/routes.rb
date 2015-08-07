Rails.application.routes.draw do

  put 'users/:id' => 'users#update'

  devise_for :users
  root 'angular#angular'

end
