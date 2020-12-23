class Api::V1::VanImagesController < ApplicationController
    def index 
        van_images = VanImage.all
        render json: van_images
    end
    
    def show
        van_image = VanImage.find(params[:id])
        render json: van_image
    end
end
