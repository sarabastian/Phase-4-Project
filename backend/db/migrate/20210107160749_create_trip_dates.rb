class CreateTripDates < ActiveRecord::Migration[6.0]
  def change
    create_table :trip_dates do |t|
      t.string :departure_date
      t.string :return_date
      t.integer :van_id
      

      t.timestamps
    end
  end
end
