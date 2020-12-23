class Api::V1::VansController < ApplicationController
    def index
        vans = Van.all 
        render json: vans
    end

    def show
        van = Van.find(params[:id])
        render json: van
    end



end
