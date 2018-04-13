class Api::ReviewsController < ApplicationController


    def index
        @reviews = Book.find(params[:book_id]).reviews
        render json: @reviews
      end
    
      def show
        @review = Review.find(params[:id])
    
        render json: @review
      end
    
      def create
        
        @review = Review.find(params[:review_id])
        @review = Review.new(review_params)
    
        render json: @review

        @book.review << @review
        @review.save!

      end 

      def update
        @review = Review.find(params[:id])
        @review.update!(review_params)
    
        render json: @review
      end
    
      def destroy
        @review = Review.find(params[:id]).delete
    
        render status: :ok
      end
    
      private
    
      def review_params
        params.require(:review).permit(:comment)
      end
    end



