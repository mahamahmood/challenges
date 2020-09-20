class GiftsController < ApplicationController

    def index
        puts "=======params======="
        puts params
        puts "=======params======="
        render json: {
            status: 200,
            gifts: Gift.all
        }
    end

    def show
        puts "=======params======="
        puts params
        puts !!params[:stuff]
        puts params[:stuff].present?
        puts "=======params======="
        @gift = Gift.find(params[:id])
        render json: {
            status: 200,
            gift: @gift
        }
    end

    def create 
        puts "=======params======="
        puts params
        puts "=======params======="
        puts "==========gift_params============="
        puts gift_params
        puts "==========gift_params============="
        @gift = Gift.create(gift_params)
        render json: @gift
    end

    def update
        puts "=======params======="
        puts params
        puts "=======params======="
        puts "==========gift_params============="
        puts gift_params
        puts "==========gift_params============="
        @gift = Gift.find(params[:id])
        @gift.update(gift_params)
        render json: { 
            status: 200,
            gift: @gift 
        }
    end

    def destroy
        puts "=======params======="
        puts params
        puts "=======params======="
        puts "==========gift_params============="
        puts gift_params
        puts "==========gift_params============="
        @gift = Gift.destroy(params[:id])
        render json: {
            status: 204
        }
    end

    private

    def gift_params
        params.required(:gift).permit(:description, :value, :event, :gift_giver)
    end 

end