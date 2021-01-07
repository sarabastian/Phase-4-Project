class TripDateSerializer < ActiveModel::Serializer
  belongs_to :van, :saved_van
  attributes :id, :departure_date, :return_date, :van_id, :saved_van_id
end
