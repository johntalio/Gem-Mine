Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root 'static_pages#root'
  get '/favorites' => 'static_pages#favorites', as: 'favorites'

  post '/search' => 'search#create'
end
