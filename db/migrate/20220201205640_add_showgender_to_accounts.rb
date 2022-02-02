class AddShowgenderToAccounts < ActiveRecord::Migration[6.1]
  def change
    add_column :accounts, :showgender, :string
  end
end
