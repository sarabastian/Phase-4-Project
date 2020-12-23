class VanImageSerializer < ActiveModel::Serializer
  belongs_to :image 
  belongs_to :van
  attributes :id, :image_id, :van_id
end
