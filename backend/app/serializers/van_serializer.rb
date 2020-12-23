class VanSerializer < ActiveModel::Serializer
  has_many :orders
  has_many :users, through: :orders
  has_many :van_images
  has_many :images, through: :van_images
  has_many :reviews
  attributes :id, :name, :description, :price, :mileage, :size, :interior_features, :utilities, :available
end
