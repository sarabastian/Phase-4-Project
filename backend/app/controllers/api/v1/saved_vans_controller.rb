class Api::V1::SavedVansController < ApplicationController
    def index
        saved_vans = SavedVan.all 
        render json: saved_vans
    end

    def show
        saved_van = SavedVan.find(params[:id])
        render json: saved_van
    end

    def create
        
        saved_van = SavedVan.new(saved_van_params)
        if saved_van.save 
            render json: saved_van 
        end
    end

    def update
        saved_van = SavedVan.find(params[:id])
        saved_van.update(saved_van_params)
        if saved_van.save 
            render json: saved_van
        end
    end

    def destroy
        saved_van = SavedVan.find(params[:id])
        saved_van.delete
    end

    private
    def saved_van_params
        params.require(:saved_van).permit(:user_id, :van_id)
    end
end
