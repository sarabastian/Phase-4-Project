class Api::V1::OrdersController < ApplicationController

    def index
        orders = Order.all
    end

    def show
        order = Order.find(params[:id])
    end

    def create
        order = Order.new(order_params)
        if @order.save render json:review
        end
    end

    def delete
        order = Order.find(params[:id])
        order.delete
    end

    def order_params
        params.require(:order).permit(:user_id, :van_id)
    end
end
