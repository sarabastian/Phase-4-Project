class TripDate < ApplicationRecord
    belongs_to :van 
    belongs_to :saved_van
end
