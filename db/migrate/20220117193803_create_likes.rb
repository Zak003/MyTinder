class CreateLikes < ActiveRecord::Migration[6.1]
  def change
    create_table :likes do |t|
      t.references :account
      t.integer :liked_account_id
      t.timestamps
    end
  end
end
