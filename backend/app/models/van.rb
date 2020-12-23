class Van < ApplicationRecord
    has_many :orders
    has_many :users, through: :orders
    has_many :van_images
    has_many :images, through: :van_images
    has_many :reviews
end
