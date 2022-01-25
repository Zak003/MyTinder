module AccountsHelper
    def profile_thumbnail account
        image_tag account.image, width: "40px", height: "40px", class: "float-left profile-thumb rounded-circle mr-3" if account.image?
    end
end
