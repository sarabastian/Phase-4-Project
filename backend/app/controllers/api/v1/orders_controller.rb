class Api::V1::OrdersController < ApplicationController

    def index
        orders = Order.all
        render json: orders
    end

    def show
        order = Order.find(params[:id])
        render json: order
    end

    def create
        order = Order.new(order_params)
        if @order.save render json: order
        end
    end

    def destroy
        order = Order.find(params[:id])
        if order.user != current_user
        else
            order.destroy
            render json: {msg: "Reservation was deleted.."}
        end
    end

    private

    def order_params
        params.require(:order).permit(:user_id, :van_id)
    end
end
