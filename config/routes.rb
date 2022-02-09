Rails.application.routes.draw do
  devise_for :accounts, controllers: { omniauth_callbacks: "accounts/omniauth_callbacks", registrations: 'accounts/registrations' }
  
  resources "conversations" do 
    resources "messages"
  end
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  
  get "/browse" => "browse#browse", as: :browse
  get "/matches" => "browse#matches", as: :matches
  post "/approve/:id" => "browse#approve", as: :approve_user
  post "/decline/:id" => "browse#decline", as: :decline_user
  post "get/conversation/:id" => "browse#open_conversation", as: :open_conversation
  post "get/profile_show/:id" => "browse#profile_show", as: :profile_show
  
  
  
  root to:'public#home'
end
