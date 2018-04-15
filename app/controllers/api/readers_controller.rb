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
        render json:@reader, include: :books
    end

    def update
        @reader = Reader.find(params[:id])
        @reader.update!(reader_params)
        render json:@reader
    end

    def destroy
        @reader = Reader.find(params[:id]).destroy
    
        render status: :ok
      end
    
      private
    
      def reader_params
        params.require(:reader).permit(:name, :photo_url, :location)
      end
    end






