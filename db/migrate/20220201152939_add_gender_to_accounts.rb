class AddGenderToAccounts < ActiveRecord::Migration[6.1]
  def change
    add_column :accounts, :gender, :string
  end
end
