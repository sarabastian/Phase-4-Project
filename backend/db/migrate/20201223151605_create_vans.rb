class CreateVans < ActiveRecord::Migration[6.0]
  def change
    create_table :vans do |t|
      t.string :name
      t.string :description
      t.integer :price
      t.integer :mileage
      t.string :size
      t.string :interior_features
      t.string :utilities
      t.boolean :available

      t.timestamps
    end
  end
end
