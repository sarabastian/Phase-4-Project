class Order < ApplicationRecord


    belongs_to :user
    belongs_to :van
    has_many :trip_dates, through: :van


end
