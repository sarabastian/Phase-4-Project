class Api::V1::ReviewsController < ApplicationController
    def index
        # byebug
        reviews = Review.all 
        render json: reviews
    end
    
    def show
        review = Review.find(params[:id])
        render json: review
    end

    def create
        review = Review.new(review_params)
        if @review.save render json: review
        end
    end

    def delete
        review = Review.find(params[:id])
        review.delete
    end

    def review_params
        params.require(:review).permit(:user_id, :van_id, :comment)
    end
end
