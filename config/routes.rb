Rails.application.routes.draw do
  
  namespace :api do
    resources :readers do
      resources :books 
    end
  end
  
end


