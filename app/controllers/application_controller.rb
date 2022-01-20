class ApplicationController < ActionController::Base
    before_action :configure_devise, if: :devise_controller?

    protected

    def configure_devise
        devise_parameter_sanitizer.permit(:account_sign_up, keys: [:first_name, :last_name, :username, :image])
        devise_parameter_sanitizer.permit(:account_update, keys: [:first_name, :last_name, :username, :image]) 
    end
    
end
