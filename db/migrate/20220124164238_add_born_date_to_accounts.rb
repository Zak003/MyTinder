class AddBornDateToAccounts < ActiveRecord::Migration[6.1]
  def change
    add_column :accounts, :bornDate, :datetime
  end
end
