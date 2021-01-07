class VanSerializer < ActiveModel::Serializer
  has_many :orders
  has_many :users, through: :orders
  has_many :reviews
  has_many :trip_dates

  attributes :id, :name, :description, :price, :mileage, :size, :interior_features, :utilities, :available, :location,
              :rates, :pet_friendly, :img_1, :img_2, :img_3
end
