Rails.application.routes.draw do
  get 'rates/index'
  root 'rates#index'
end
