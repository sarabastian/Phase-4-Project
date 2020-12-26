class OrderSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :van_id

  belongs_to :user
  belongs_to :van

  
end
