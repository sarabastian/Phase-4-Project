class ImageSerializer < ActiveModel::Serializer
  has_many :van_images
  has_many :vans, through: :van_images
  attributes :id, :img_url
end
