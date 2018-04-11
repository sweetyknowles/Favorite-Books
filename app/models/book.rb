class Book < ApplicationRecord
  belongs_to :reader
  has_many :comments, dependent: :destroy
end
