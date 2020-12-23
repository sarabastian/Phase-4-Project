class CreateVanImages < ActiveRecord::Migration[6.0]
  def change
    create_table :van_images do |t|
      t.integer :image_id
      t.integer :van_id

      t.timestamps
    end
  end
end
