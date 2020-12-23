class AddPetFriendlyToVans < ActiveRecord::Migration[6.0]
  def change
    add_column :vans, :pet_friendly, :boolean
  end
end
