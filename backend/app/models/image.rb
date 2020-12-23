class Image < ApplicationRecord
    has_many :van_images
    has_many :vans, through: :van_images
end
