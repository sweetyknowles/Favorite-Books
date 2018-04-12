class Book < ApplicationRecord
  belongs_to :reader
  has_many :reviews, dependent: :destroy
end
