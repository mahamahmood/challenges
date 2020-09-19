Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  resources :songs
  # get "/songs", to: "songs#index"
  # post "/songs", to: "songs#create"
  # post "/songs", to: "songs#create"
end
