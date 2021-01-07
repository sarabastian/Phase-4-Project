class TripDateSerializer < ActiveModel::Serializer
  belongs_to :van
 
  attributes :id, :departure_date, :return_date, :van_id
end
