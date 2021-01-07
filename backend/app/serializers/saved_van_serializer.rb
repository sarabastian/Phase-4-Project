class SavedVanSerializer < ActiveModel::Serializer
  belongs_to :user
  belongs_to :van
  has_many :trip_dates

  attributes :id, :user_id, :van_id
end
