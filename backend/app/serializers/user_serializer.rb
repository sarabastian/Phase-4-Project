class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :address, :email

  has_many :orders
  has_many :vans, through: :orders
  has_many :reviews

end