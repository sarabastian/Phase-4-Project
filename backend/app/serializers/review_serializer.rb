class ReviewSerializer < ActiveModel::Serializer
  belongs_to :user
  belongs_to :van
  attributes :id, :user_id, :van_id, :comment
end
