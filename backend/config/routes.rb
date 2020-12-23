Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :vans, only: [:show, :index]
      resources :van_images, only: [:show]
      resources :images, only: [:show, :index]
      resources :van_images, only: [:show, :index]
      resources :reviews

    end
  end
end
