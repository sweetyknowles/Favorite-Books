Rails.application.routes.draw do
  
  namespace :api do
    resources :readers do
      resources :books do
        resources :reviews 
    end
  end
end
end


