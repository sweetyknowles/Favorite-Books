class Api::BooksController < ApplicationController

    def index
        @books = Reader.find(params[:reader_id]).books
        render json: @books
      end
    
      def show
        @book = Book.find(params[:id])
    
        render json: @book
      end
    
      def create
        
        @reader = Reader.find(params[:reader_id])
        @book = Book.new(book_params)
    
        render json: @book

        @reader.books << @book
        @reader.save!

      end 

      def update
        @book = Book.find(params[:id])
        @book.update!(book_params)
    
        render json: @book
      end
    
      def destroy
        @book = Book.find(params[:id]).delete
    
        render status: :ok
      end
    
      private
    
      def book_params
        params.require(:book).permit(:title,:author, :publish, :genre, :photo_url, :synopis)
      end
    end
