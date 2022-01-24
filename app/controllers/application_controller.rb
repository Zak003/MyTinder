class ApplicationController < ActionController::Base
    before_action :configure_devise, if: :devise_controller?

    protected

    def configure_devise
        devise_parameter_sanitizer.permit(:sign_up, keys: [:first_name, :last_name, :username, :image, :job_studies, :location, :bornDate])
        devise_parameter_sanitizer.permit(:account_update, keys: [:first_name, :last_name, :username, :image, :job_studies, :location, :bornDate]) 
    end
    
end
