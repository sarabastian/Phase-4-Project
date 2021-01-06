Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do

      resources :users
      # , only: [:index, :create, :show]

      post '/login', to:'sessions#create'
      # post '/login', to: 'auth#create'
      # get '/profile', to: 'users#profile'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

      resources :vans, only: [:show, :index]
      resources :van_images, only: [:show]
      resources :images, only: [:show, :index]
      resources :van_images, only: [:show, :index]
      resources :orders, only: [:index, :show]
      resources :reviews
      resources :saved_vans

    end
  end

end
