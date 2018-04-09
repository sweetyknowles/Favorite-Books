class Api::ReadersController < ApplicationController

    def index 
        @readers = Reader.all
        render json: @readers 
    end

    def create 
        @reader = Reader.create!(reader_params)
        render json: @reader
    end
    
    def show 
        @reader = Reader.find(params[:id])
        render json:@reader
    end







end
