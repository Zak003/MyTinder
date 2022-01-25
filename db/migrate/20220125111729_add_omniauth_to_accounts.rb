class AddOmniauthToAccounts < ActiveRecord::Migration[6.1]
  def change
    add_column :accounts, :name, :string
    add_column :accounts, :image_social, :string
    add_column :accounts, :uid, :string
    add_column :accounts, :provider, :string
  end
end
