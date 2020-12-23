class User < ApplicationRecord
    has_many :orders
    has_many :vans, through: :orders
    has_many :reviews
    has_many :saved_vans
   


    has_secure_password
    validates :username, uniqueness: { case_sensitive: false }


end
