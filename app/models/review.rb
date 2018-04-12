class Review < ApplicationRecord
  belongs_to :book
  validates :content, presence: true
  # user is restricted to the content length between 1-200
  validates :title, length: { minimum: 1 }
  validates :title, length: { maximum: 200}
end
