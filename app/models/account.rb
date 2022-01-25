class Account < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable, :omniauthable, omniauth_providers: [:google_oauth2]

  has_one_attached :image
  has_many :messages

  def self.from_omniauth(access_token)
    data = access_token.info
    account = Account.where(email: data['email']).first

    unless account
      account = Account.create(
           email: data['email'],
           password: Devise.friendly_token[0,20],
           first_name: access_token.info.first_name,
           image_social: access_token.info.image,
           uid: access_token.uid,
           provider: access_token.provider
        )
    end
    account
  end
end
