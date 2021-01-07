class AddImagesToVan < ActiveRecord::Migration[6.0]
  def change
    add_column :vans, :img_1, :string
    add_column :vans, :img_2, :string
    add_column :vans, :img_3, :string
  end
end
