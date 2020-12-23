class AddRatesToVans < ActiveRecord::Migration[6.0]
  def change
    add_column :vans, :rates, :integer
  end
end
