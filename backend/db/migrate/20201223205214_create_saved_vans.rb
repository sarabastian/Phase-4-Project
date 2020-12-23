class CreateSavedVans < ActiveRecord::Migration[6.0]
  def change
    create_table :saved_vans do |t|
      t.integer :user_id
      t.integer :van_id

      t.timestamps
    end
  end
end
