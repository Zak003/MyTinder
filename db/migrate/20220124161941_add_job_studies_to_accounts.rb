class AddJobStudiesToAccounts < ActiveRecord::Migration[6.1]
  def change
    add_column :accounts, :job_studies, :string
  end
end
