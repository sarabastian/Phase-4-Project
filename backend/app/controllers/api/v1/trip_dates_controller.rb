class Api::V1::TripDatesController < ApplicationController

def index
    trip_dates = TripDates.all 
    render json: dates
end

def show
    trip_date = TripDate.find(params[:id])
    render json: trip_date
end

def create
  
        trip_date = TripDate.new(trip_date_params)
    if trip_date.save 
        render json: trip_date
    end
end

private

def trip_date_params
    params.require(:trip_date).permit(:departure_date, :return_date, :van_id, :saved_van_id)
end


end