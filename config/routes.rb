Rails.application.routes.draw do
  
  namespace :api do
    get "/books", to: "books#get_all_books"
    resources :readers do
      resources :books do
        resources :reviews 

    end
  end
end
end


