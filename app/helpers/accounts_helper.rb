module AccountsHelper
    def profile_thumbnail account
             if account.image.attached? 
                 image_tag(account.image, width: "40px", height: "40px", class: "float-left profile-thumb rounded-circle mr-3") 
                 elsif account.image_social? 
                    image_tag(account.image_social, width: "40px", height: "40px", class: "float-left profile-thumb rounded-circle mr-3") 
                 else 
                   image_pack_tag('default-profile.png', width: "40px", height: "40px", class: "float-left profile-thumb rounded-circle mr-3") 
            end 
    end

    def get_account_from_conversation conversation
        matched_account_id = conversation.sender_id == current_account.id ? conversation.recipient_id : conversation.sender_id
        @matches.select{ |account| account.id == matched_account_id }.first
    end

end
