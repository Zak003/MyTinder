class BrowseController < ApplicationController

    def browse
        @users = Account.where.not(id: current_account.id)
    end

    def approve
        #user swipes right
    end

    def decline
        #user swipes left
    end

end
